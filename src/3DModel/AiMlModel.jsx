import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Icosahedron, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

/* ===================== HOLOGRAPHIC CORE ===================== */
const HolographicCore = () => {
    const meshRef = useRef()

    useFrame(({ clock }) => {
        if (!meshRef.current) return
        const t = clock.getElapsedTime()

        meshRef.current.rotation.y = t * 0.2
        meshRef.current.rotation.x = t * 0.1

        // Calm breathing glow
        meshRef.current.material.emissiveIntensity =
            1.1 + Math.sin(t * 1.2) * 0.15
    })

    return (
        <group>
            {/* Inner intelligence */}
            <Icosahedron args={[1, 2]} ref={meshRef}>
                <meshPhongMaterial
                    color="#6366f1"
                    emissive="#4f46e5"
                    emissiveIntensity={1.2}
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </Icosahedron>

            {/* Soft outer hologram */}
            <mesh scale={1.25}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial
                    color="#60a5fa"
                    transparent
                    opacity={0.06}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
        </group>
    )
}

/* ===================== NEURAL PARTICLES ===================== */
const NeuralParticles = ({ count = 80 }) => {
    const points = useRef()

    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3)
        const radius = 2.6

        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2
            const phi = Math.random() * Math.PI

            arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
            arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
            arr[i * 3 + 2] = radius * Math.cos(phi)
        }
        return arr
    }, [count])

    useFrame(({ clock }) => {
        if (!points.current) return
        const t = clock.getElapsedTime()
        points.current.rotation.y = t * 0.05
        points.current.rotation.z = t * 0.02
    })

    return (
        <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#93c5fd"
                size={0.045}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    )
}

/* ===================== DATA STREAM CARD ===================== */
const DataStreamCard = ({ position, delay, color }) => {
    const ref = useRef()
    const base = useRef(new THREE.Vector3(...position))

    useFrame(({ clock }) => {
        if (!ref.current) return
        const t = clock.getElapsedTime() + delay

        // Gentle vertical motion
        ref.current.position.y = base.current.y + Math.sin(t * 0.5) * 0.15

        // Slowly converge toward AI core
        ref.current.position.x += (0 - ref.current.position.x) * 0.002
        ref.current.position.z += (0 - ref.current.position.z) * 0.002

        ref.current.rotation.x = Math.sin(t * 0.3) * 0.08
        ref.current.rotation.z = Math.cos(t * 0.25) * 0.08
    })

    return (
        <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.4}>
            <group ref={ref} position={position}>
                {/* Glass card */}
                <mesh>
                    <boxGeometry args={[0.5, 0.3, 0.02]} />
                    <meshPhysicalMaterial
                        color={color}
                        roughness={0.15}
                        metalness={0.6}
                        transmission={0.6}
                        thickness={0.5}
                        transparent
                        opacity={0.85}
                    />
                </mesh>

                {/* Holographic edge */}
                <mesh scale={[1.02, 1.05, 1]}>
                    <boxGeometry args={[0.5, 0.3, 0.01]} />
                    <meshBasicMaterial
                        color={color}
                        wireframe
                        transparent
                        opacity={0.25}
                    />
                </mesh>
            </group>
        </Float>
    )
}

/* ===================== MAIN MODEL ===================== */
const AiMlModel = () => {
    return (
        <group scale={0.8}>
            <HolographicCore />
            <NeuralParticles count={80} />

            {/* Incoming business data */}
            <DataStreamCard position={[-1.8, 0.6, 0.6]} delay={0} color="#22d3ee" />
            <DataStreamCard position={[1.8, -0.4, 0.3]} delay={1} color="#a78bfa" />
            <DataStreamCard position={[-1.3, -1.2, 0.9]} delay={2} color="#60a5fa" />
            <DataStreamCard position={[1.5, 1.2, 0.6]} delay={3} color="#e879f9" />
        </group>
    )
}

export default AiMlModel
