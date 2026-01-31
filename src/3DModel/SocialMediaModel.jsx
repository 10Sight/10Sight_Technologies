import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

/* ===================== COLORS ===================== */
const colors = {
    primary: '#db2777',
    secondary: '#9333ea',
    accent: '#3b82f6',
    glass: '#fdf4ff',
    dark: '#1e293b'
}

/* ===================== SMARTPHONE ===================== */
const Smartphone = ({ position, rotation }) => {
    const screenRef = useRef()

    useFrame(({ clock }) => {
        if (!screenRef.current) return
        screenRef.current.material.opacity =
            0.15 + Math.sin(clock.elapsedTime * 1.5) * 0.05
    })

    return (
        <group position={position} rotation={rotation}>
            <mesh>
                <boxGeometry args={[0.5, 1, 0.05]} />
                <meshStandardMaterial color="#1e1e1e" roughness={0.4} metalness={0.8} />
            </mesh>
            <mesh position={[0, 0, 0.026]} ref={screenRef}>
                <planeGeometry args={[0.45, 0.95]} />
                <meshBasicMaterial color={colors.primary} transparent toneMapped={false} />
            </mesh>
            <mesh position={[0, 0, 0.027]}>
                <planeGeometry args={[0.4, 0.85]} />
                <meshBasicMaterial color={colors.dark} />
            </mesh>
        </group>
    )
}

/* ===================== LAPTOP ===================== */
const Laptop = ({ position, rotation }) => {
    const screenRef = useRef()

    useFrame(({ clock }) => {
        if (!screenRef.current) return
        screenRef.current.material.opacity =
            0.12 + Math.sin(clock.elapsedTime * 1.2) * 0.04
    })

    return (
        <group position={position} rotation={rotation}>
            <mesh>
                <boxGeometry args={[1.2, 0.04, 0.8]} />
                <meshStandardMaterial color="#334155" roughness={0.5} metalness={0.7} />
            </mesh>
            <group position={[0, 0, -0.35]} rotation={[-0.4, 0, 0]}>
                <mesh position={[0, 0.4, 0]}>
                    <boxGeometry args={[1.2, 0.8, 0.02]} />
                    <meshStandardMaterial color="#334155" roughness={0.5} metalness={0.7} />
                </mesh>
                <mesh position={[0, 0.4, 0.011]} ref={screenRef}>
                    <planeGeometry args={[1.1, 0.7]} />
                    <meshBasicMaterial color={colors.primary} transparent />
                </mesh>
            </group>
        </group>
    )
}

/* ===================== CONTENT CARD ===================== */
const ContentCard = ({ radius = 2, speed = 0.4, offset = 0, color, type }) => {
    const ref = useRef()

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed + offset
        if (!ref.current) return

        ref.current.position.x = Math.cos(t) * radius
        ref.current.position.z = Math.sin(t) * radius
        ref.current.position.y = Math.sin(t * 0.8) * 0.5 + 0.5
        ref.current.rotation.y = -t
    })

    return (
        <group ref={ref}>
            <mesh>
                <boxGeometry args={[0.6, 0.4, 0.02]} />
                <meshPhysicalMaterial
                    color={colors.glass}
                    transmission={0.9}
                    roughness={0.1}
                    thickness={0.2}
                    transparent
                    opacity={0.6}
                />
            </mesh>
            <mesh scale={[1.02, 1.05, 1]}>
                <boxGeometry args={[0.6, 0.4, 0.01]} />
                <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
            </mesh>

            {type === 'heart' && (
                <mesh position={[0, 0, 0.03]}>
                    <torusGeometry args={[0.1, 0.03, 16, 32]} />
                    <meshBasicMaterial color={color} />
                </mesh>
            )}
        </group>
    )
}

/* ===================== ENGAGEMENT PARTICLES ===================== */
const EngagementParticles = ({ count = 50 }) => {
    const ref = useRef()
    const positions = useMemo(() => {
        const p = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 3
            p[i * 3 + 1] = (Math.random() - 0.5) * 2
            p[i * 3 + 2] = Math.random() * 3
        }
        return p
    }, [count])

    useFrame(() => {
        if (ref.current) ref.current.position.z += 0.002
        if (ref.current.position.z > 3) ref.current.position.z = 0
    })

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                color={colors.primary}
                transparent
                opacity={0.6}
                blending={THREE.AdditiveBlending}
            />
        </points>
    )
}

/* ===================== MAIN ===================== */
const SocialMediaModel = () => {
    return (
        <group scale={0.75}>
            <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.2}>
                <group position={[0, -0.5, 0]} rotation={[0.2, -0.2, 0]}>
                    <Laptop />
                    <Smartphone position={[0.9, 0, 0.4]} rotation={[-0.1, -0.2, 0.1]} />
                </group>

                <ContentCard radius={2.2} speed={0.35} offset={0} color={colors.primary} type="post" />
                <ContentCard radius={2.4} speed={0.4} offset={1} color={colors.secondary} type="heart" />
                <ContentCard radius={2.6} speed={0.3} offset={2} color={colors.accent} type="post" />
                <ContentCard radius={2.8} speed={0.25} offset={3} color="#f472b6" type="heart" />

                <EngagementParticles />
            </Float>
        </group>
    )
}

export default SocialMediaModel
