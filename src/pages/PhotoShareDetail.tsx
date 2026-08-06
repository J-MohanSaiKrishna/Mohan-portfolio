import { useEffect, useRef, useState } from "react";
import { motion, useInView, useCountUp } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft, Cloud, Database, Shield, Server,
    Globe, Zap, Activity, Lock, CheckCircle2,
    Network, Key, MonitorDot, Container, LayoutDashboard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ─── Animated counter ─────────────────────────────────── */
const AnimatedNumber = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1200;
        const step = 16;
        const increment = target / (duration / step);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, step);
        return () => clearInterval(timer);
    }, [inView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── Data ──────────────────────────────────────────────── */
const metrics = [
    { label: "AWS Services", value: 10, suffix: "+", icon: Cloud },
    { label: "Availability Zones", value: 2, suffix: "", icon: Globe },
    { label: "Security Layers", value: 5, suffix: "", icon: Shield },
    { label: "Subnets", value: 4, suffix: "", icon: Network },
];

const steps = [
    {
        icon: Globe, step: "01", title: "VPC & Networking",
        desc: "Designed photoshare-vpc (10.0.0.0/16) spanning two AZs with 4 subnets. Public subnets host the ALB and Web Server; private subnets isolate RDS from the internet. Configured Internet Gateway + public-rt route table.",
        tags: ["VPC", "Public Subnet", "Private Subnet", "Internet Gateway", "Route Tables"],
        accent: "#85c4b9", rgb: "133,196,185",
    },
    {
        icon: Shield, step: "02", title: "IAM Roles & Least-Privilege",
        desc: "Zero hardcoded credentials. Created iam_role_ec2 (S3FullAccess + SecretsManagerReadOnly) for the Web Server and iam_role_lambda (LambdaBasicExecution + S3FullAccess) for the serverless function.",
        tags: ["IAM Roles", "iam_role_ec2", "iam_role_lambda", "AmazonS3FullAccess", "SecretsManager"],
        accent: "#f59e0b", rgb: "245,158,11",
    },
    {
        icon: Key, step: "03", title: "KMS Encryption",
        desc: "Leveraged alias/aws/secretsmanager AWS-managed KMS key to encrypt database credentials at rest. Verified key state is Enabled — credentials are unreadable without the key.",
        tags: ["AWS KMS", "alias/aws/secretsmanager", "Secrets Manager", "Encryption at Rest"],
        accent: "#8b5cf6", rgb: "139,92,246",
    },
    {
        icon: Database, step: "04", title: "RDS MySQL – Private & Secure",
        desc: "MySQL 8.4 RDS (db.t3.micro, 20 GB gp3) inside photoshare-db-group across private subnets. No public access. db-sg restricts port 3306 exclusively to the EC2 security group.",
        tags: ["Amazon RDS", "MySQL 8.4", "DB Subnet Group", "db-sg", "No Public Access"],
        accent: "#06b6d4", rgb: "6,182,212",
    },
    {
        icon: Cloud, step: "05", title: "S3 – Private Object Storage",
        desc: "photoshare-assets-* (us-east-1, AES-256). All four Block Public Access settings enforced. Photos served exclusively through the web app after auth checks — no direct S3 URLs.",
        tags: ["Amazon S3", "AES-256", "Block Public Access", "Private Bucket"],
        accent: "#ec4899", rgb: "236,72,153",
    },
    {
        icon: LayoutDashboard, step: "06", title: "Application Load Balancer",
        desc: "photoshare-alb (Internet-facing, IPv4) across Public Subnets in both AZs. photoshare-sg allows HTTP:80 + SSH:22. photoshare-tg (Instance, HTTP:80) routes traffic to the Web Server.",
        tags: ["ALB", "photoshare-alb", "photoshare-tg", "Internet-facing", "photoshare-sg"],
        accent: "#10b981", rgb: "16,185,129",
    },
    {
        icon: Zap, step: "07", title: "Lambda – Serverless Processing",
        desc: "photoshare-metadata-extractor (Python 3.14) with S3 ObjectCreated trigger. Runs outside VPC for direct S3/internet access. S3_BUCKET and ALB_DNS env vars decouple config from code.",
        tags: ["AWS Lambda", "Python 3.14", "S3 Trigger", "iam_role_lambda", "No VPC"],
        accent: "#f97316", rgb: "249,115,22",
    },
    {
        icon: Container, step: "08", title: "EC2 – Dockerized Web Server",
        desc: "photoshare-web (Amazon Linux 2023, t3.micro) in Public Subnet 1. iam_role_ec2 attached. Installed Docker + Docker Compose, deployed app via docker-compose up -d, registered to photoshare-tg.",
        tags: ["Amazon EC2", "Amazon Linux 2023", "Docker", "Docker Compose", "t3.micro"],
        accent: "#85c4b9", rgb: "133,196,185",
    },
    {
        icon: MonitorDot, step: "09", title: "CloudWatch Monitoring",
        desc: "PhotoShare-Monitor dashboard: EC2 CPUUtilization (Line) + Lambda Invocations (Number). PhotoShare-Lambda-Error-Alarm fires instantly when Lambda errors exceed 0 — full observability.",
        tags: ["Amazon CloudWatch", "Dashboard", "Lambda Alarm", "EC2 Metrics", "Observability"],
        accent: "#a78bfa", rgb: "167,139,250",
    },
];

const techStack = [
    { name: "Amazon VPC", cat: "Networking" },
    { name: "Amazon EC2", cat: "Compute" },
    { name: "Amazon RDS", cat: "Database" },
    { name: "Amazon S3", cat: "Storage" },
    { name: "AWS Lambda", cat: "Serverless" },
    { name: "App Load Balancer", cat: "Networking" },
    { name: "AWS IAM", cat: "Security" },
    { name: "AWS KMS", cat: "Security" },
    { name: "Secrets Manager", cat: "Security" },
    { name: "Amazon CloudWatch", cat: "Monitoring" },
    { name: "Docker", cat: "DevOps" },
    { name: "Docker Compose", cat: "DevOps" },
    { name: "Amazon Linux 2023", cat: "OS" },
    { name: "Terraform", cat: "IaC" },
    { name: "Kubernetes", cat: "Orchestration" },
    { name: "Jenkins CI/CD", cat: "DevOps" },
];

const catColor: Record<string, string> = {
    Networking: "text-[#85c4b9] border-[#85c4b9]/30 bg-[#85c4b9]/10",
    Compute: "text-[#06b6d4] border-[#06b6d4]/30 bg-[#06b6d4]/10",
    Database: "text-[#06b6d4] border-[#06b6d4]/30 bg-[#06b6d4]/10",
    Storage: "text-[#ec4899] border-[#ec4899]/30 bg-[#ec4899]/10",
    Serverless: "text-[#f97316] border-[#f97316]/30 bg-[#f97316]/10",
    Security: "text-[#8b5cf6] border-[#8b5cf6]/30 bg-[#8b5cf6]/10",
    Monitoring: "text-[#a78bfa] border-[#a78bfa]/30 bg-[#a78bfa]/10",
    DevOps: "text-[#f59e0b] border-[#f59e0b]/30 bg-[#f59e0b]/10",
    IaC: "text-[#10b981] border-[#10b981]/30 bg-[#10b981]/10",
    Orchestration: "text-[#10b981] border-[#10b981]/30 bg-[#10b981]/10",
    OS: "text-white/60 border-white/20 bg-white/5",
};

/* ─── Architecture visual diagram nodes ─────────────────── */
const DiagramNode = ({
    label, sublabel, color, delay = 0, className = "",
}: { label: string; sublabel?: string; color: string; delay?: number; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        className={`relative flex flex-col items-center justify-center px-3 py-2 rounded-xl border text-center ${className}`}
        style={{ borderColor: `${color}50`, background: `${color}15`, boxShadow: `0 0 16px ${color}20` }}
    >
        <span className="text-xs font-bold font-mono" style={{ color }}>{label}</span>
        {sublabel && <span className="text-[10px] text-white/40 mt-0.5">{sublabel}</span>}
    </motion.div>
);

/* ─── Component ─────────────────────────────────────────── */
const PhotoShareDetail = () => {
    const navigate = useNavigate();

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07 } }),
    };

    return (
        <div className="min-h-screen relative overflow-hidden text-foreground" style={{ background: "#080d0c" }}>
            {/* Atmospheric glows */}
            <div className="absolute top-0 left-[-20%] w-[700px] h-[700px] rounded-full blur-[220px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(133,196,185,0.12), transparent 70%)" }} />
            <div className="absolute bottom-0 right-[-15%] w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none animate-pulse" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)" }} />
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07), transparent 70%)" }} />

            {/* Grid overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: "linear-gradient(rgba(133,196,185,1) 1px, transparent 1px), linear-gradient(90deg, rgba(133,196,185,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

            {/* Nav */}
            <nav className="relative z-20 max-w-7xl mx-auto px-6 py-8">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                    <Button
                        variant="ghost"
                        onClick={() => navigate(-1)}
                        className="text-[#85c4b9] hover:text-white hover:bg-white/5 transition-all font-mono tracking-widest uppercase flex items-center gap-2 group border border-[#85c4b9]/20 hover:border-[#85c4b9]/40 rounded-xl px-4 py-2"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        Back to Portfolio
                    </Button>
                </motion.div>
            </nav>

            <main className="relative z-10 max-w-5xl mx-auto px-4 pb-32 pt-4">

                {/* ── HERO ───────────────────────────────────────────────── */}
                <div className="text-center mb-24">
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8 border"
                        style={{ background: "rgba(133,196,185,0.06)", borderColor: "rgba(133,196,185,0.35)", boxShadow: "0 0 24px rgba(133,196,185,0.15)" }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#85c4b9] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#85c4b9]" />
                        </span>
                        <span className="text-sm text-[#85c4b9] font-bold font-mono tracking-widest uppercase">AWS Cloud Internship Project</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black font-mono tracking-tight uppercase mb-6"
                        style={{ background: "linear-gradient(135deg, #85c4b9 0%, #06b6d4 40%, #85c4b9 80%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 30px rgba(133,196,185,0.35))" }}
                    >
                        PhotoShare
                    </motion.h1>

                    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
                        className="w-48 h-0.5 mx-auto mb-8 rounded-full"
                        style={{ background: "linear-gradient(90deg, transparent, #85c4b9, transparent)", boxShadow: "0 0 20px rgba(133,196,185,0.5)" }}
                    />

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
                    >
                        A <span className="font-semibold text-[#85c4b9]">production-grade, secure cloud infrastructure</span> for a photo-sharing application — built on AWS using VPC isolation, IAM least-privilege, private RDS, serverless Lambda, and full CloudWatch observability.
                    </motion.p>
                </div>

                {/* ── METRICS ────────────────────────────────────────────── */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
                >
                    {metrics.map((m, i) => (
                        <motion.div key={m.label} custom={i} variants={fadeUp}>
                            <Card className="p-6 text-center border relative overflow-hidden group transition-all duration-300 hover:-translate-y-2"
                                style={{ background: "rgba(0,0,0,0.5)", borderColor: "rgba(133,196,185,0.15)", boxShadow: "0 0 20px rgba(133,196,185,0.05)" }}
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: "radial-gradient(circle at 50% 50%, rgba(133,196,185,0.07), transparent 70%)" }} />
                                <m.icon className="w-5 h-5 text-[#85c4b9]/60 mx-auto mb-3" />
                                <p className="text-4xl font-black font-mono mb-1" style={{ color: "#85c4b9", textShadow: "0 0 20px rgba(133,196,185,0.4)" }}>
                                    <AnimatedNumber target={m.value} suffix={m.suffix} />
                                </p>
                                <p className="text-xs text-white/40 uppercase tracking-widest">{m.label}</p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── VISUAL ARCHITECTURE DIAGRAM ────────────────────────── */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
                    <h2 className="text-2xl font-black font-mono text-white text-center mb-10 flex items-center justify-center gap-3">
                        <Network className="w-6 h-6 text-[#85c4b9]" />
                        <span>Infrastructure <span className="text-[#85c4b9]">Architecture</span></span>
                    </h2>
                    <Card className="p-6 md:p-10 border overflow-hidden" style={{ background: "rgba(0,0,0,0.6)", borderColor: "rgba(133,196,185,0.15)" }}>
                        <div className="flex flex-col items-center gap-3 text-sm">

                            {/* Internet */}
                            <DiagramNode label="🌐 Internet" color="#85c4b9" delay={0} className="w-36" />
                            <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="w-0.5 h-6 bg-gradient-to-b from-[#85c4b9]/60 to-[#85c4b9]/20 origin-top" />

                            {/* ALB */}
                            <DiagramNode label="Application Load Balancer" sublabel="photoshare-alb | Internet-facing" color="#10b981" delay={0.15} className="w-72" />
                            <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 0.25 }} className="w-0.5 h-6 bg-gradient-to-b from-[#10b981]/60 to-[#85c4b9]/20 origin-top" />

                            {/* Public zone */}
                            <div className="w-full border border-dashed border-[#85c4b9]/20 rounded-2xl p-4 relative" style={{ background: "rgba(133,196,185,0.03)" }}>
                                <span className="absolute -top-3 left-4 text-[10px] font-mono text-[#85c4b9]/50 uppercase tracking-widest bg-[#080d0c] px-2">Public Zone — us-east-1a</span>
                                <div className="flex justify-center">
                                    <DiagramNode label="EC2 Web Server" sublabel="photoshare-web | t3.micro | Docker" color="#85c4b9" delay={0.3} className="w-64" />
                                </div>
                            </div>

                            <div className="flex items-start gap-6 w-full">
                                <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="w-0.5 h-8 bg-gradient-to-b from-[#85c4b9]/40 to-[#06b6d4]/40 origin-top mx-auto" />
                            </div>

                            {/* Private zone */}
                            <div className="w-full border border-dashed border-[#8b5cf6]/20 rounded-2xl p-4 relative" style={{ background: "rgba(139,92,246,0.03)" }}>
                                <span className="absolute -top-3 left-4 text-[10px] font-mono text-[#8b5cf6]/50 uppercase tracking-widest bg-[#080d0c] px-2">Private Zone — us-east-1a/1b</span>
                                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                                    <DiagramNode label="RDS MySQL 8.4" sublabel="photoshare-db | No Public Access" color="#06b6d4" delay={0.45} className="w-56" />
                                    <div className="text-[#8b5cf6]/40 font-mono text-xs">+ KMS encrypted</div>
                                    <DiagramNode label="S3 Bucket" sublabel="photoshare-assets-* | AES-256" color="#ec4899" delay={0.5} className="w-56" />
                                </div>
                            </div>

                            <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 0.55 }} className="w-0.5 h-6 bg-gradient-to-b from-[#ec4899]/40 to-[#f97316]/40 origin-top" />

                            {/* Lambda */}
                            <DiagramNode label="⚡ Lambda" sublabel="photoshare-metadata-extractor | Python 3.14" color="#f97316" delay={0.6} className="w-72" />
                            <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 0.65 }} className="w-0.5 h-6 bg-gradient-to-b from-[#f97316]/40 to-[#a78bfa]/40 origin-top" />

                            {/* CloudWatch */}
                            <DiagramNode label="📊 CloudWatch" sublabel="PhotoShare-Monitor | Lambda Error Alarm" color="#a78bfa" delay={0.7} className="w-72" />
                        </div>
                    </Card>
                </motion.div>

                {/* ── OVERVIEW CARD ───────────────────────────────────────── */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
                    <Card className="relative p-8 md:p-12 border-2 overflow-hidden"
                        style={{ background: "rgba(0,0,0,0.65)", borderColor: "rgba(133,196,185,0.25)", boxShadow: "0 0 50px rgba(133,196,185,0.08)" }}>
                        <div className="absolute inset-0 pointer-events-none rounded-2xl"
                            style={{ background: "radial-gradient(ellipse at top left, rgba(133,196,185,0.07), transparent 60%), radial-gradient(ellipse at bottom right, rgba(6,182,212,0.05), transparent 60%)" }} />
                        <div className="relative z-10 space-y-5">
                            <h2 className="text-2xl font-bold font-mono text-white flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-[#85c4b9]" />
                                What I Built & Why It Matters
                            </h2>
                            <p className="text-white/75 leading-relaxed">
                                Designed and deployed a <strong className="text-[#85c4b9]">full-stack cloud architecture</strong> for a photo-sharing web application applying real-world DevOps and cloud-security best practices. The infrastructure enforces strict separation of concerns — public-facing load balancer, hardened web server, privately-isolated database, and an event-driven serverless processor — all observable through CloudWatch.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                {[
                                    { icon: "🔐", text: "Zero hardcoded credentials — IAM roles + Secrets Manager" },
                                    { icon: "🗄️", text: "Database fully hidden from internet — VPC private subnets" },
                                    { icon: "🔒", text: "All data encrypted at rest — KMS + AES-256 S3" },
                                    { icon: "📡", text: "Instant failure alerting — CloudWatch Error Alarm" },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                                        <span className="text-lg shrink-0">{item.icon}</span>
                                        <span className="text-sm text-white/65 leading-snug">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* ── ARCHITECTURE STEPS (Timeline) ──────────────────────── */}
                <div className="mb-20">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                        className="text-3xl font-black font-mono text-center mb-14 text-white"
                    >
                        <span style={{ background: "linear-gradient(90deg,#85c4b9,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>9-Step</span>{" "}Architecture Walkthrough
                    </motion.h2>

                    <div className="relative">
                        {/* Vertical timeline line */}
                        <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
                            style={{ background: "linear-gradient(to bottom, transparent, rgba(133,196,185,0.3) 10%, rgba(133,196,185,0.3) 90%, transparent)" }} />

                        <div className="space-y-6">
                            {steps.map((s, idx) => (
                                <motion.div key={idx} custom={idx} variants={fadeUp}
                                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                                >
                                    <Card className="relative md:ml-14 p-5 md:p-6 border group transition-all duration-400 hover:-translate-y-1 overflow-hidden"
                                        style={{
                                            background: "rgba(0,0,0,0.45)",
                                            borderColor: `rgba(${s.rgb},0.2)`,
                                            boxShadow: `0 0 0 rgba(${s.rgb},0)`,
                                        }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px rgba(${s.rgb},0.12)`; }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 rgba(${s.rgb},0)`; }}
                                    >
                                        {/* Subtle gradient bg */}
                                        <div className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-70"
                                            style={{ background: `radial-gradient(ellipse at top left, rgba(${s.rgb},0.12), transparent 60%)` }} />

                                        {/* Timeline dot */}
                                        <div className="absolute -left-[3.4rem] top-6 w-3 h-3 rounded-full border-2 hidden md:block transition-all duration-300 group-hover:scale-150"
                                            style={{ borderColor: s.accent, background: `rgba(${s.rgb},0.3)`, boxShadow: `0 0 8px rgba(${s.rgb},0.4)` }} />

                                        <div className="relative z-10 flex gap-4 items-start">
                                            {/* Icon */}
                                            <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                                                style={{ borderColor: `rgba(${s.rgb},0.35)`, background: `rgba(${s.rgb},0.12)` }}>
                                                <s.icon className="w-5 h-5" style={{ color: s.accent }} />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                                                    <span className="text-[10px] font-mono tracking-[0.2em] text-white/25">STEP {s.step}</span>
                                                    <h3 className="text-base font-bold text-white/90 transition-colors duration-300 group-hover:text-white" style={{ "--hover-color": s.accent } as any}>
                                                        {s.title}
                                                    </h3>
                                                </div>
                                                <p className="text-white/60 text-sm leading-relaxed mb-3">{s.desc}</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {s.tags.map((tag) => (
                                                        <span key={tag} className="px-2 py-0.5 rounded-md text-[11px] font-mono border"
                                                            style={{ color: `rgba(${s.rgb},0.85)`, borderColor: `rgba(${s.rgb},0.25)`, background: `rgba(${s.rgb},0.08)` }}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── TECH STACK ──────────────────────────────────────────── */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
                    <h2 className="text-3xl font-black font-mono text-center mb-10 text-white">Full Tech Stack</h2>
                    <div className="flex flex-wrap gap-2.5 justify-center">
                        {techStack.map((t, i) => (
                            <motion.span key={t.name}
                                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }}
                                whileHover={{ scale: 1.08, y: -2 }}
                                className={`px-3 py-1.5 rounded-lg text-sm font-mono border cursor-default transition-all duration-200 ${catColor[t.cat]}`}
                            >
                                {t.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* ── FOOTER ──────────────────────────────────────────────── */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className="text-center rounded-2xl p-10 max-w-3xl mx-auto border backdrop-blur-sm"
                    style={{ background: "rgba(133,196,185,0.04)", borderColor: "rgba(133,196,185,0.2)", boxShadow: "0 0 40px rgba(133,196,185,0.06)" }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#85c4b9", boxShadow: "0 0 10px #85c4b9" }} />
                        <p className="text-[#85c4b9] font-mono text-sm tracking-widest uppercase font-bold">Project Completed · AWS Cloud Internship</p>
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#85c4b9", boxShadow: "0 0 10px #85c4b9" }} />
                    </div>
                    <p className="text-white/45 text-sm leading-relaxed">
                        Built a secure, scalable, production-ready cloud architecture using 10+ AWS services — zero hardcoded credentials, private database isolation, event-driven serverless processing, and full observability.
                    </p>
                </motion.div>

            </main>
        </div>
    );
};

export default PhotoShareDetail;
