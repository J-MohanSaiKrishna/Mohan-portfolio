import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    Cloud,
    Database,
    Shield,
    Server,
    Globe,
    Zap,
    Activity,
    Lock,
    CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
    {
        icon: Globe,
        step: "01",
        title: "VPC & Networking",
        desc: "Designed a custom Virtual Private Cloud (photoshare-vpc, 10.0.0.0/16) spanning two Availability Zones. Public subnets host the ALB and Web Server; private subnets isolate the RDS database from the internet. Configured an Internet Gateway and a dedicated public-rt route table associating only the public subnets.",
        tags: ["VPC", "Public Subnet", "Private Subnet", "Internet Gateway", "Route Tables", "us-east-1a/1b"],
        color: "from-[#85c4b9]/20 to-[#85c4b9]/5",
        border: "border-[#85c4b9]/30",
        glow: "shadow-[0_0_25px_rgba(133,196,185,0.15)]",
    },
    {
        icon: Shield,
        step: "02",
        title: "IAM Roles & Least-Privilege Security",
        desc: "Created two scoped IAM roles instead of embedding credentials: iam_role_ec2 (S3FullAccess + SecretsManagerClientReadOnly) for the Web Server, and iam_role_lambda (LambdaBasicExecution + S3FullAccess) for the serverless function.",
        tags: ["IAM Roles", "iam_role_ec2", "iam_role_lambda", "AmazonS3FullAccess", "SecretsManager"],
        color: "from-[#f59e0b]/20 to-[#f59e0b]/5",
        border: "border-[#f59e0b]/30",
        glow: "shadow-[0_0_25px_rgba(245,158,11,0.15)]",
    },
    {
        icon: Lock,
        step: "03",
        title: "KMS Encryption",
        desc: "Leveraged the AWS-managed KMS key (alias/aws/secretsmanager) to encrypt database credentials stored in Secrets Manager. Verified key state is Enabled — credentials are scrambled gibberish to anyone without the key.",
        tags: ["AWS KMS", "alias/aws/secretsmanager", "Secrets Manager", "Encryption at Rest", "Key ARN"],
        color: "from-[#8b5cf6]/20 to-[#8b5cf6]/5",
        border: "border-[#8b5cf6]/30",
        glow: "shadow-[0_0_25px_rgba(139,92,246,0.15)]",
    },
    {
        icon: Database,
        step: "04",
        title: "RDS MySQL – Private & Secure",
        desc: "Provisioned a MySQL 8.4 RDS instance (db.t3.micro, 20 GB gp3) inside photoshare-db-group spanning private subnets in both AZs. Public access disabled; db-sg restricts port 3306 exclusively to the EC2 web security group.",
        tags: ["Amazon RDS", "MySQL 8.4", "db.t3.micro", "DB Subnet Group", "db-sg", "No Public Access"],
        color: "from-[#06b6d4]/20 to-[#06b6d4]/5",
        border: "border-[#06b6d4]/30",
        glow: "shadow-[0_0_25px_rgba(6,182,212,0.15)]",
    },
    {
        icon: Cloud,
        step: "05",
        title: "S3 – Private Object Storage",
        desc: "Created photoshare-assets-* bucket (us-east-1, AES-256 default encryption) with all four Block Public Access settings enforced. Photos are served exclusively through the web application after authorization checks.",
        tags: ["Amazon S3", "AES-256", "Block Public Access", "Private Bucket", "photoshare-assets-*"],
        color: "from-[#ec4899]/20 to-[#ec4899]/5",
        border: "border-[#ec4899]/30",
        glow: "shadow-[0_0_25px_rgba(236,72,153,0.15)]",
    },
    {
        icon: Globe,
        step: "06",
        title: "Application Load Balancer",
        desc: "Deployed photoshare-alb (Internet-facing, IPv4) across Public Subnets in us-east-1a and us-east-1b. photoshare-sg allows HTTP:80 and SSH:22. Created photoshare-tg (Instance, HTTP:80) to forward traffic to the Web Server.",
        tags: ["ALB", "photoshare-alb", "photoshare-tg", "photoshare-sg", "Internet-facing"],
        color: "from-[#10b981]/20 to-[#10b981]/5",
        border: "border-[#10b981]/30",
        glow: "shadow-[0_0_25px_rgba(16,185,129,0.15)]",
    },
    {
        icon: Zap,
        step: "07",
        title: "Lambda – Serverless Image Processing",
        desc: "Built photoshare-metadata-extractor (Python 3.14, x86_64) with an S3 ObjectCreated trigger. Runs outside VPC to retain public-internet access to S3 and ALB without a NAT Gateway. Environment variables decouple config from code.",
        tags: ["AWS Lambda", "Python 3.14", "S3 Trigger", "iam_role_lambda", "Serverless", "No VPC"],
        color: "from-[#f97316]/20 to-[#f97316]/5",
        border: "border-[#f97316]/30",
        glow: "shadow-[0_0_25px_rgba(249,115,22,0.15)]",
    },
    {
        icon: Server,
        step: "08",
        title: "EC2 Web Server – Dockerized App",
        desc: "Launched photoshare-web (Amazon Linux 2023, t3.micro) in Public Subnet 1 with iam_role_ec2 assigned. Installed Docker and Docker Compose, created docker-compose.yml and .env, then ran the app with docker-compose up -d. Registered instance to photoshare-tg.",
        tags: ["Amazon EC2", "Amazon Linux 2023", "Docker", "Docker Compose", "t3.micro", "iam_role_ec2"],
        color: "from-[#85c4b9]/20 to-[#85c4b9]/5",
        border: "border-[#85c4b9]/30",
        glow: "shadow-[0_0_25px_rgba(133,196,185,0.15)]",
    },
    {
        icon: Activity,
        step: "09",
        title: "CloudWatch Monitoring & Alerts",
        desc: "Created PhotoShare-Monitor dashboard with EC2 CPUUtilization (Line chart) and Lambda Invocations (Number widget). Configured PhotoShare-Lambda-Error-Alarm (errors > 0 threshold) to catch silent serverless failures instantly.",
        tags: ["Amazon CloudWatch", "Dashboard", "Lambda Alarm", "EC2 Metrics", "Observability"],
        color: "from-[#a78bfa]/20 to-[#a78bfa]/5",
        border: "border-[#a78bfa]/30",
        glow: "shadow-[0_0_25px_rgba(167,139,250,0.15)]",
    },
];

const metrics = [
    { label: "AWS Services Used", value: "10+" },
    { label: "Availability Zones", value: "2" },
    { label: "Security Layers", value: "5" },
    { label: "Subnets Configured", value: "4" },
];

const techStack = [
    "Amazon VPC", "Amazon EC2", "Amazon RDS (MySQL 8.4)", "Amazon S3",
    "AWS Lambda", "Application Load Balancer", "AWS IAM", "AWS KMS",
    "AWS Secrets Manager", "Amazon CloudWatch", "Docker", "Docker Compose",
    "Linux (Amazon Linux 2023)", "Terraform (IaC)", "Kubernetes", "Jenkins CI/CD",
];

const PhotoShareDetail = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen relative overflow-hidden text-foreground bg-[#0a0f0e]">
            <div className="absolute top-10 left-[-15%] w-[600px] h-[600px] bg-[#85c4b9]/10 rounded-full blur-[200px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-20 right-[-10%] w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-[200px] animate-pulse delay-1000 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#8b5cf6]/5 rounded-full blur-[240px] pointer-events-none" />

            <nav className="relative z-20 max-w-7xl mx-auto px-6 py-8">
                <Button
                    variant="ghost"
                    onClick={() => navigate(-1)}
                    className="text-[#85c4b9] hover:text-white hover:bg-white/5 transition-all font-mono tracking-widest uppercase flex items-center gap-2 group border border-transparent hover:border-[#85c4b9]/20 rounded-xl"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Button>
            </nav>

            <main className="relative z-10 max-w-5xl mx-auto px-4 pb-24 pt-6">

                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-black/50 border border-[#85c4b9]/40 rounded-full mb-8 shadow-[0_0_20px_rgba(133,196,185,0.2)]">
                        <Cloud className="w-4 h-4 text-[#85c4b9] animate-pulse" />
                        <span className="text-sm text-[#85c4b9] font-bold font-mono tracking-widest uppercase">
                            AWS Cloud Internship Project
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#85c4b9] via-[#06b6d4] to-[#85c4b9] bg-[length:200%_auto] drop-shadow-[0_0_20px_rgba(133,196,185,0.4)] uppercase mb-6">
                        PhotoShare
                    </h1>
                    <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#85c4b9] to-transparent mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(133,196,185,0.6)]" />
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                        A{" "}
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#85c4b9] to-[#06b6d4]">
                            production-grade, secure cloud infrastructure
                        </span>{" "}
                        for a photo-sharing application built on AWS — VPC isolation, IAM least-privilege, RDS in private subnets, serverless Lambda processing, and CloudWatch observability.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {metrics.map((m) => (
                        <Card
                            key={m.label}
                            className="p-5 bg-black/50 border border-[#85c4b9]/20 text-center hover:border-[#85c4b9]/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(133,196,185,0.08)]"
                        >
                            <p className="text-3xl font-black text-[#85c4b9] font-mono mb-1">{m.value}</p>
                            <p className="text-xs text-white/50 uppercase tracking-widest">{m.label}</p>
                        </Card>
                    ))}
                </div>

                <Card className="relative p-8 md:p-12 bg-black/60 border-2 border-[#85c4b9]/30 shadow-[0_0_40px_rgba(133,196,185,0.1)] mb-16 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#85c4b9]/5 via-transparent to-[#06b6d4]/5 pointer-events-none rounded-2xl" />
                    <div className="relative z-10 space-y-5">
                        <h2 className="text-2xl font-bold font-mono text-white flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6 text-[#85c4b9]" />
                            What I Built & Why It Matters
                        </h2>
                        <p className="text-white/80 leading-relaxed text-base">
                            Designed and deployed a <strong className="text-[#85c4b9]">full-stack cloud architecture</strong> for a photo-sharing web application using real-world DevOps and cloud-security best practices. The infrastructure separates concerns across multiple AWS services — a public-facing load balancer, a hardened web server, a privately-isolated database, and a serverless image processor — all monitored through CloudWatch.
                        </p>
                        <p className="text-white/80 leading-relaxed text-base">
                            Key outcomes: <strong className="text-[#85c4b9]">zero hardcoded credentials</strong> via IAM roles and Secrets Manager, database <strong className="text-[#85c4b9]">completely hidden</strong> from the internet using VPC private subnets, all sensitive data <strong className="text-[#85c4b9]">encrypted at rest</strong> with KMS and AES-256, and <strong className="text-[#85c4b9]">automatic alerting</strong> for serverless failures via CloudWatch alarms.
                        </p>
                    </div>
                </Card>

                <div className="mb-16">
                    <h2 className="text-3xl font-black font-mono text-center mb-12 text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#85c4b9] to-[#06b6d4]">9-Step</span>{" "}
                        Architecture Walkthrough
                    </h2>
                    <div className="space-y-5">
                        {steps.map((s, idx) => (
                            <Card
                                key={idx}
                                className={`relative p-6 bg-black/40 border ${s.border} transition-all duration-500 hover:-translate-y-1 ${s.glow} group overflow-hidden`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${s.color} pointer-events-none opacity-60`} />
                                <div className="relative z-10 flex gap-5 items-start">
                                    <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center border ${s.border} group-hover:scale-110 transition-transform`}>
                                        <s.icon className="w-6 h-6 text-white/80" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                                            <span className="text-xs font-mono text-white/30 tracking-widest">STEP {s.step}</span>
                                            <h3 className="text-lg font-bold text-white group-hover:text-[#85c4b9] transition-colors">{s.title}</h3>
                                        </div>
                                        <p className="text-white/70 text-sm leading-relaxed mb-3">{s.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {s.tags.map((tag) => (
                                                <Badge key={tag} className="bg-white/5 hover:bg-white/10 text-white/70 border-white/10 text-xs transition-colors">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-black font-mono text-center mb-10 text-white">Full Tech Stack</h2>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {techStack.map((t) => (
                            <Badge key={t} className="bg-[#85c4b9]/10 hover:bg-[#85c4b9]/20 text-[#85c4b9] border-[#85c4b9]/30 py-2 px-4 text-sm transition-colors cursor-default">
                                {t}
                            </Badge>
                        ))}
                    </div>
                </div>

                <Card className="p-8 bg-black/60 border border-[#85c4b9]/20 mb-16 shadow-[0_0_30px_rgba(133,196,185,0.08)]">
                    <h2 className="text-xl font-bold font-mono text-white mb-6 flex items-center gap-2">
                        <Server className="w-5 h-5 text-[#85c4b9]" /> Infrastructure Flow
                    </h2>
                    <pre className="text-xs md:text-sm text-[#85c4b9]/80 font-mono leading-loose whitespace-pre overflow-x-auto">{`Internet
   |
   v
[ALB - photoshare-alb]        Public Subnets (us-east-1a / 1b)
   |   photoshare-sg            HTTP:80 + SSH:22 from 0.0.0.0/0
   v
[EC2 - photoshare-web]        Public Subnet 1  10.0.1.0/24
   |   iam_role_ec2             photoshare-web-sg
   |   Docker + App
   |
   +---> [RDS MySQL 8.4]       Private Subnet 1  10.0.2.0/24
   |       photoshare-db          db-sg: 3306 from web-sg ONLY
   |       KMS-encrypted creds    No public access
   |
   +---> [S3 Bucket]           Private  (Block Public Access)
           photoshare-assets-*   AES-256 encryption
               |
               | ObjectCreated trigger
               v
        [Lambda] photoshare-metadata-extractor
           iam_role_lambda  |  Python 3.14  |  No VPC

CloudWatch --> PhotoShare-Monitor Dashboard
              EC2 CPUUtilization (Line)
              Lambda Invocations (Number)
              PhotoShare-Lambda-Error-Alarm (Errors > 0)`}</pre>
                </Card>

                <div className="text-center bg-[#85c4b9]/5 border border-[#85c4b9]/20 rounded-2xl p-8 max-w-3xl mx-auto shadow-[0_0_30px_rgba(133,196,185,0.08)] backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="w-2 h-2 rounded-full bg-[#85c4b9] animate-pulse shadow-[0_0_8px_#85c4b9]" />
                        <p className="text-[#85c4b9] font-mono text-sm tracking-widest uppercase">
                            Project Completed - AWS Cloud Internship
                        </p>
                        <span className="w-2 h-2 rounded-full bg-[#85c4b9] animate-pulse shadow-[0_0_8px_#85c4b9]" />
                    </div>
                    <p className="text-white/50 text-sm mt-2">
                        Built a secure, scalable, production-ready cloud architecture using 10+ AWS services with zero hardcoded credentials, private database isolation, serverless image processing, and full observability.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default PhotoShareDetail;
