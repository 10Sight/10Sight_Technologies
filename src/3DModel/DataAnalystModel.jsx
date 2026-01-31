import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

/* ===================== COLORS ===================== */
const colors = {
    primary: '#06b6d4',
    secondary: '#3b82f6',
    accent: '#14b8a6',
    glass: '#e0f2fe',
    text: '#ffffff'
}

/* ===================== DASHBOARD BASE ===================== */
const DashboardBase = () => (
    <group rotation={[0.18, 0, 0]}>
        <mesh>
            <boxGeometry args={[4, 2.5, 0.1]} />
            <meshPhysicalMaterial
                color={colors.glass}
                roughness={0.1}
                transmission={0.9}
                thickness={0.5}
                transparent
                opacity={0.3}
            />
        </mesh>
        <mesh>
            <boxGeometry args={[4.05, 2.55, 0.08]} />
            <meshBasicMaterial
                color={colors.primary}
                wireframe
                transparent
                opacity={0.18}
            />
        </mesh>
    </group>
)

/* ===================== BAR CHART ===================== */
const BarChart = ({ position }) => {
    const group = useRef()

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime()
        if (!group.current) return

        group.current.children.forEach((bar, i) => {
            const scale = 1 + Math.sin(t * 1.8 + i) * 0.25
            bar.scale.y = scale
            bar.position.y = scale * 0.75 // anchor to bottom
        })
    })

    return (
        <group position={position} ref={group}>
            {[-1, -0.5, 0, 0.5, 1].map((x, i) => (
                <mesh key={i} position={[x * 0.6, 0.75, 0]}>
                    <boxGeometry args={[0.4, 1.5, 0.4]} />
                    <meshStandardMaterial
                        color={i % 2 ? colors.secondary : colors.primary}
                        emissive={i % 2 ? colors.secondary : colors.primary}
                        emissiveIntensity={0.35}
                        transparent
                        opacity={0.85}
                    />
                </mesh>
            ))}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[3, 0.05, 0.05]} />
                <meshBasicMaterial color="white" transparent opacity={0.4} />
            </mesh>
        </group>
    )
}

/* ===================== PIE CHART ===================== */
const PieChart = ({ position }) => {
    const ref = useRef()

    useFrame(({ clock }) => {
        if (!ref.current) return
        const t = clock.getElapsedTime()
        ref.current.rotation.y = t * 0.18
    })

    return (
        <group position={position} ref={ref}>
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.05]}>
                <cylinderGeometry args={[0.6, 0.6, 0.2, 32, 1, false, 0, Math.PI * 1.2]} />
                <meshStandardMaterial color={colors.accent} emissive={colors.accent} emissiveIntensity={0.5} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, Math.PI * 1.25]} position={[0, 0, 0]}>
                <cylinderGeometry args={[0.6, 0.6, 0.2, 32, 1, false, 0, Math.PI * 0.5]} />
                <meshStandardMaterial color={colors.secondary} emissive={colors.secondary} emissiveIntensity={0.5} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, Math.PI * 1.8]} position={[0, 0, -0.05]}>
                <cylinderGeometry args={[0.6, 0.6, 0.2, 32, 1, false, 0, Math.PI * 0.3]} />
                <meshStandardMaterial color={colors.text} emissive={colors.text} emissiveIntensity={0.6} />
            </mesh>
        </group>
    )
}

/* ===================== KPI CARD ===================== */
const KpiCard = ({ position, delay, highlight = false }) => {
    const ref = useRef()

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() + delay
        if (!ref.current) return
        ref.current.position.y = position[1] + Math.sin(t) * 0.08
    })

    return (
        <group position={position} ref={ref} scale={highlight ? 1.15 : 1}>
            <mesh>
                <boxGeometry args={[1.2, 0.8, 0.05]} />
                <meshPhysicalMaterial
                    color="#ffffff"
                    transmission={0.8}
                    roughness={0.2}
                    thickness={0.2}
                    transparent
                    opacity={0.5}
                />
            </mesh>
            <mesh scale={[1.02, 1.05, 1]}>
                <boxGeometry args={[1.2, 0.8, 0.04]} />
                <meshBasicMaterial color={colors.primary} wireframe transparent opacity={0.25} />
            </mesh>
        </group>
    )
}

/* ===================== DATA PARTICLES ===================== */
const DataParticles = ({ count = 60 }) => {
    const ref = useRef()

    const positions = useMemo(() => {
        const p = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 6
            p[i * 3 + 1] = (Math.random() - 0.5) * 4
            p[i * 3 + 2] = (Math.random() - 0.5) * 2
        }
        return p
    }, [count])

    useFrame(() => {
        if (ref.current) ref.current.rotation.y += 0.0005
    })

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.03} color={colors.primary} transparent opacity={0.6} />
        </points>
    )
}

/* ===================== MAIN ===================== */
const DataAnalystModel = () => {
    return (
        <group scale={0.7}>
            <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
                <DashboardBase />

                <group position={[-1.2, -0.3, 0.2]} scale={0.6}>
                    <BarChart position={[0, 0, 0]} />
                </group>

                <group position={[1.2, 0.2, 0.3]} scale={0.8}>
                    <PieChart position={[0, 0, 0]} />
                </group>

                <KpiCard position={[-2.2, 1, 0.5]} delay={0} highlight />
                <KpiCard position={[2.2, -0.8, 0.5]} delay={2} />

                <DataParticles />
            </Float>
        </group>
    )
}

export default DataAnalystModel
