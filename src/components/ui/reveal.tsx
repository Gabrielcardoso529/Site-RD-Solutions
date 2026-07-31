import { useEffect, useRef, useState, type ReactNode,} from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    once?: boolean;
};

export function Reveal({
    children,
    className,
    delay = 0,
    once = true,
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const element = ref.current;
        if(!element) return;
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (reduceMotion) {
            setVisible(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (once) {
                        observer.unobserve(element);
                    }
                }   else if (!once) {
                    setVisible(false);
                }
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -60px",
            }   
        );

        observer.observe(element);
        return () => {
            observer.disconnect();
        };
    }, [once]);
    return (
        <div
            ref={ref}
            className={cn(
                "transition-[opacity,transform,filter] duration 700 ease-out",
                visible
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-6 opacity-0 blur-[2px]",
                className    
            )}
            style={{
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>    
    );
}