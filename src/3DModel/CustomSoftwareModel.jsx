import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

/* ===================== COLORS ===================== */
const colors = {
    primary: '#6366f1',
    secondary: '#3b82f6',
    accent: '#0ea5e9',
    dark: '#1e293b',
    glass: '#f1f5f9'
}

/* ===================== MODULAR BLOCK ===================== */
const ModularBlock = ({ position, scale = [1, 1, 1], color, transparent = false }) => (
    <group position={position}>
        <mesh scale={scale}>
            <boxGeometry args={[1, 1, 1]} />
            {transparent ? (
                <meshPhysicalMaterial
                    color={color}
                    roughness={0.15}
                    transmission={0.8}
                    thickness={0.5}
                    transparent
                    opacity={0.55}
                />
            ) : (
                <meshStandardMaterial color={color} roughness={0.45} metalness={0.6} />
            )}
        </mesh>
        <mesh scale={[scale[0] + 0.02, scale[1] + 0.02, scale[2] + 0.02]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={color} wireframe transparent opacity={0.25} />
        </mesh>
    </group>
)

/* ===================== ARCHITECTURE CORE ===================== */
const ArchitectureCore = () => {
    const ref = useRef()

    useFrame(({ clock }) => {
        if (!ref.current) return
        const t = clock.getElapsedTime()
        ref.current.rotation.y = t * 0.08
        ref.current.position.y = Math.sin(t * 0.6) * 0.05
    })

    return (
        <group ref={ref}>
            <ModularBlock position={[0, 0, 0]} scale={[2, 0.5, 2]} color={colors.dark} />

            <ModularBlock position={[-0.6, 0.5, 0.6]} scale={[0.8, 0.5, 0.8]} color={colors.primary} />
            <ModularBlock position={[0.6, 0.5, -0.6]} scale={[0.8, 0.5, 0.8]} color={colors.secondary} />
            <ModularBlock position={[-0.6, 0.5, -0.6]} scale={[0.8, 0.8, 0.8]} color={colors.accent} transparent />
            <ModularBlock position={[0.6, 0.5, 0.6]} scale={[0.8, 0.8, 0.8]} color={colors.primary} transparent />

            <ModularBlock position={[0, 1.2, 0]} scale={[2.2, 0.2, 0.5]} color={colors.dark} />
        </group>
    )
}

/* ===================== FEATURE MODULE ===================== */
const FeatureModule = ({ position, iconType, color, delay = 0 }) => {
    const ref = useRef()
    const base = useRef(new THREE.Vector3(...position))

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() + delay
        if (!ref.current) return

        ref.current.position.y = base.current.y + Math.sin(t) * 0.15
        ref.current.position.x += (0 - ref.current.position.x) * 0.0015
        ref.current.position.z += (0 - ref.current.position.z) * 0.0015
        ref.current.rotation.z = Math.sin(t * 0.4) * 0.05
    })

    return (
        <group ref={ref} position={position}>
            <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
                <mesh>
                    <boxGeometry args={[0.8, 0.8, 0.1]} />
                    <meshPhysicalMaterial
                        color={colors.glass}
                        roughness={0.2}
                        transmission={0.9}
                        thickness={0.2}
                        transparent
                        opacity={0.7}
                    />
                </mesh>
                <mesh scale={[1.05, 1.05, 1]}>
                    <boxGeometry args={[0.8, 0.8, 0.08]} />
                    <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
                </mesh>

                {/* Icon */}
                {iconType === 'lock' && (
                    <group position={[0, 0, 0.06]}>
                        <mesh position={[0, -0.1, 0]}>
                            <boxGeometry args={[0.3, 0.25, 0.05]} />
                            <meshBasicMaterial color={color} />
                        </mesh>
                        <mesh position={[0, 0.1, 0]}>
                            <torusGeometry args={[0.1, 0.03, 16, 32, Math.PI]} />
                            <meshBasicMaterial color={color} />
                        </mesh>
                    </group>
                )}

                {iconType === 'db' && (
                    <group position={[0, 0, 0.06]}>
                        {[0.15, 0, -0.15].map((y, i) => (
                            <mesh key={i} position={[0, y, 0]} rotation={[0.2, 0, 0]}>
                                <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
                                <meshBasicMaterial color={color} transparent opacity={1 - i * 0.3} />
                            </mesh>
                        ))}
                    </group>
                )}

                {iconType === 'api' && (
                    <group position={[0, 0, 0.06]}>
                        <mesh>
                            <torusGeometry args={[0.15, 0.04, 16, 32]} />
                            <meshBasicMaterial color={color} />
                        </mesh>
                        <mesh position={[0.18, 0.18, 0]}>
                            <sphereGeometry args={[0.08]} />
                            <meshBasicMaterial color={color} />
                        </mesh>
                        <mesh position={[-0.18, -0.18, 0]}>
                            <sphereGeometry args={[0.08]} />
                            <meshBasicMaterial color={color} />
                        </mesh>
                    </group>
                )}
            </Float>

            <mesh position={[0, -0.8, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 1.5]} />
                <meshBasicMaterial color={color} transparent opacity={0.2} />
            </mesh>
        </group>
    )
}

/* ===================== DATA FLOW ===================== */
const DataFlowParticles = ({ count = 60 }) => {
    const ref = useRef()
    const positions = useMemo(() => {
        const p = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 4
            p[i * 3 + 1] = (Math.random() - 0.5) * 4
            p[i * 3 + 2] = Math.random() * 4
        }
        return p
    }, [count])

    useFrame(() => {
        if (ref.current) ref.current.position.z -= 0.002
        if (ref.current.position.z < -2) ref.current.position.z = 2
    })

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.05} color={colors.accent} transparent opacity={0.4} />
        </points>
    )
}

/* ===================== MAIN ===================== */
const CustomSoftwareModel = () => {
    return (
        <group scale={0.7}>
            <Float speed={0.9} rotationIntensity={0.1} floatIntensity={0.2}>
                <ArchitectureCore />

                <FeatureModule position={[-2, 1.5, 0.5]} iconType="lock" color={colors.primary} />
                <FeatureModule position={[2, 0.5, 0.5]} iconType="db" color={colors.secondary} delay={1.5} />
                <FeatureModule position={[-1.5, -1.5, 0.8]} iconType="api" color={colors.accent} delay={2.5} />

                <DataFlowParticles />
            </Float>
        </group>
    )
}

export default CustomSoftwareModel
