"use client";
import React, { useRef } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useMotionTemplate,
} from "motion/react";

import { cn } from "../../lib/utils";

export const CometCard = ({
    rotateDepth = 17.5,
    translateDepth = 20,
    className,
    children,
}) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        [`-${rotateDepth}deg`, `${rotateDepth}deg`]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        [`${rotateDepth}deg`, `-${rotateDepth}deg`]
    );

    const translateX = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        [`-${translateDepth}px`, `${translateDepth}px`]
    );
    const translateY = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        [`${translateDepth}px`, `-${translateDepth}px`]
    );

    const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [-40, 40]);
    const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [40, -40]);
    const shadowOpacity = useTransform([x, y], ([latestX, latestY]) =>
        latestX !== 0 || latestY !== 0 ? 0.5 : 0
    );

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / rect.width - 0.5;
        const yPct = mouseY / rect.height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className={cn("perspective-distant transform-3d", className)}>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    translateX,
                    translateY,
                    boxShadow: useMotionTemplate`${shadowX}px ${shadowY}px 40px rgba(204, 255, 0, ${shadowOpacity})`,
                }}
                initial={{ scale: 1, z: 0 }}
                whileHover={{
                    scale: 1.05,
                    z: 50,
                    transition: { duration: 0.2 },
                }}
                className="relative rounded-2xl"
            >
                {children}
            </motion.div>
        </div>
    );
};