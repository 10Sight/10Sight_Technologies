import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const AndroidModel = () => {
    const groupRef = useRef()
    const leftArmRef = useRef()
    const rightArmRef = useRef()
    const leftEyeRef = useRef()
    const rightEyeRef = useRef()

    useFrame(({ clock }) => {
        if (!groupRef.current) return
        const t = clock.getElapsedTime()

        /* ===== BODY SWAY (CALM) ===== */
        groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.25

        /* ===== ARM SWING (PREMIUM, NOT CARTOON) ===== */
        if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.x = Math.sin(t * 2.2) * 0.35
            rightArmRef.current.rotation.x = Math.sin(t * 2.2 + Math.PI) * 0.35
        }

        /* ===== EYE GLOW PULSE ===== */
        const eyeGlow = 0.45 + Math.sin(t * 2) * 0.1
        if (leftEyeRef.current) leftEyeRef.current.material.emissiveIntensity = eyeGlow
        if (rightEyeRef.current) rightEyeRef.current.material.emissiveIntensity = eyeGlow
    })

    const androidGreen = '#3DDC84'

    /* ===== BODY MATERIAL ===== */
    const bodyMaterial = {
        color: androidGreen,
        roughness: 0.15,
        metalness: 0.25,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        reflectivity: 1
    }

    /* ===== HEAD MATERIAL (SLIGHTLY GLOSSIER) ===== */
    const headMaterial = {
        ...bodyMaterial,
        roughness: 0.08,
        clearcoatRoughness: 0.05
    }

    return (
        <group ref={groupRef} scale={1} position={[0, -0.5, 0]}>
            {/* ================= HEAD ================= */}
            <group position={[0, 1.45, 0]}>
                {/* Head Dome */}
                <mesh>
                    <sphereGeometry args={[1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
                    <meshPhysicalMaterial {...headMaterial} />
                </mesh>

                {/* Antennas */}
                <mesh position={[-0.4, 0.8, 0]} rotation={[0, 0, Math.PI / 6]}>
                    <capsuleGeometry args={[0.04, 0.5, 4, 8]} />
                    <meshPhysicalMaterial {...headMaterial} />
                </mesh>
                <mesh position={[0.4, 0.8, 0]} rotation={[0, 0, -Math.PI / 6]}>
                    <capsuleGeometry args={[0.04, 0.5, 4, 8]} />
                    <meshPhysicalMaterial {...headMaterial} />
                </mesh>

                {/* Eyes */}
                <mesh ref={leftEyeRef} position={[-0.4, 0.3, 0.85]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial
                        color="white"
                        emissive="white"
                        emissiveIntensity={0.45}
                        toneMapped={false}
                    />
                </mesh>
                <mesh ref={rightEyeRef} position={[0.4, 0.3, 0.85]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial
                        color="white"
                        emissive="white"
                        emissiveIntensity={0.45}
                        toneMapped={false}
                    />
                </mesh>
            </group>

            {/* ================= BODY ================= */}
            <mesh position={[0, 0.35, 0]}>
                <cylinderGeometry args={[1, 1, 2.1, 32]} />
                <meshPhysicalMaterial {...bodyMaterial} />
            </mesh>

            {/* Body Bottom Cap */}
            <mesh position={[0, -0.7, 0]}>
                <cylinderGeometry args={[1, 1, 0.1, 32]} />
                <meshPhysicalMaterial {...bodyMaterial} />
            </mesh>

            {/* ================= ARMS ================= */}
            <group ref={leftArmRef} position={[-1.2, 1.1, 0]}>
                <mesh position={[0, -0.6, 0]}>
                    <capsuleGeometry args={[0.22, 1.4, 8, 16]} />
                    <meshPhysicalMaterial {...bodyMaterial} />
                </mesh>
            </group>

            <group ref={rightArmRef} position={[1.2, 1.1, 0]}>
                <mesh position={[0, -0.6, 0]}>
                    <capsuleGeometry args={[0.22, 1.4, 8, 16]} />
                    <meshPhysicalMaterial {...bodyMaterial} />
                </mesh>
            </group>

            {/* ================= LEGS ================= */}
            <mesh position={[-0.4, -1.5, 0]}>
                <capsuleGeometry args={[0.22, 1.2, 8, 16]} />
                <meshPhysicalMaterial {...bodyMaterial} />
            </mesh>

            <mesh position={[0.4, -1.5, 0]}>
                <capsuleGeometry args={[0.22, 1.2, 8, 16]} />
                <meshPhysicalMaterial {...bodyMaterial} />
            </mesh>
        </group>
    )
}

export default AndroidModel
