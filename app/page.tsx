// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Sparkles,
//   MessageSquare,
//   Image as ImageIcon,
//   Code,
//   ArrowRight,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { useClerk, UserButton } from "@clerk/nextjs";

// export default function Home() {
//   const { user } = useClerk();
//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       <header className="px-4 lg:px-6 h-14 flex items-center justify-between z-50 relative ">
//         <Link className="flex items-center justify-center" href="/">
//           <Sparkles className="h-6 w-6 text-blue-600" />
//           <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             VISION CRAFT
//           </span>
//         </Link>
//         <nav>
//           {user ? (
//             <UserButton />
//           ) : (
//             <Link href={"/sign-in"}>
//               <Button>Sign In</Button>
//             </Link>
//           )}
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6 relative overflow-hidden">
//           {/* <Image
//             src="/placeholder.svg?height=1080&width=1920"
//             alt="Abstract background"
//             layout="fill"
//             objectFit="cover"
//             className="absolute inset-0 z-0"
//           /> */}
//           <div className="container mx-auto relative z-10">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h1 className="text-4xl font-bold tracking-tighter sm:text-2xl ">
//                   Generate Amazing
//                 </h1>
//                 <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                   Content Instantly
//                 </h1>
//                 <p className="mx-auto max-w-[700px] text-xl text-gray-500 md:text-2xl">
//                   Create blog posts, Instagram captions, code snippets, and more
//                   with our advanced AI-powered platform.
//                 </p>
//               </div>
//               <div className="w-full max-w-sm space-y-2">
//                 <form className="flex space-x-2">
//                   <Input
//                     className="flex-1 bg-white/90 text-gray-900 placeholder-gray-500 border-gray-300 focus:border-blue-500"
//                     placeholder="Enter your email"
//                     type="email"
//                   />
//                   <Button type="submit" className="">
//                     Start Free
//                   </Button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
//           <div className="container mx-auto px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Unleash Your Creativity
//             </h2>
//             <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 md:px-20">
//               <div className="flex flex-col items-center space-y-3 text-center">
//                 <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
//                   <MessageSquare className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">
//                   Blog Content
//                 </h3>
//                 <p className="text-gray-600">
//                   Generate engaging blog posts on any topic with just a few
//                   clicks.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center space-y-3 text-center">
//                 <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
//                   <ImageIcon className="h-8 w-8 text-purple-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">
//                   Instagram Posts
//                 </h3>
//                 <p className="text-gray-600">
//                   Create eye-catching captions and hashtags for your Instagram
//                   content.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center space-y-3 text-center">
//                 <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
//                   <Code className="h-8 w-8 text-pink-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">
//                   Code Generation
//                 </h3>
//                 <p className="text-gray-600">
//                   Generate code snippets and boilerplate for various programming
//                   languages.
//                 </p>
//               </div>
//             </div>
//             <div className="mt-12 text-center">
//               <Link href={"/dashboard"}>
//                 <Button className="">
//                   Explore All Features <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="w-full py-6 px-4 md:px-6 bg-gray-100">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm text-gray-600">© 2025 VISION CRAFT</p>
//           <nav className="flex gap-4 mt-4 md:mt-0">
//             <Link
//               className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
//               href="#"
//             >
//               Terms of Service
//             </Link>
//             <Link
//               className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
//               href="#"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
//               href="#"
//               target="_blank"
//             >
//               Contact Us
//             </Link>
//           </nav>
//         </div>
//       </footer>
//     </div>
//   );
// }

// "use client";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Lightbulb, Camera, Terminal, ArrowRightCircle } from "lucide-react";
// import { UserButton, useClerk } from "@clerk/nextjs";

// export default function Home() {
//   const { user } = useClerk();

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-slate-100">
//       {/* Header */}
//       <header className="px-4 lg:px-8 py-4 flex items-center justify-between shadow-sm bg-white z-50">
//         <Link href="/" className="flex items-center space-x-2">
//           <Lightbulb className="h-6 w-6 text-orange-600" />
//           <span className="text-xl font-extrabold text-gray-900">
//             IdeaForge
//           </span>
//         </Link>
//         <nav>
//           {user ? (
//             <UserButton />
//           ) : (
//             <Link href="/sign-in">
//               <Button variant="outline">Sign In</Button>
//             </Link>
//           )}
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <main className="flex-1 flex items-center justify-center px-4 py-20 md:py-32 text-center bg-white">
//         <div className="max-w-3xl">
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
//             Transform Your <span className="text-orange-600">Ideas</span> Into
//             Reality
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-gray-600">
//             Create powerful content, stunning visuals, and efficient code with
//             AI-powered tools.
//           </p>
//           <div className="mt-6">
//             <Link href="/dashboard">
//               <Button
//                 size="lg"
//                 className="bg-orange-600 hover:bg-orange-700 text-white"
//               >
//                 Start Creating <ArrowRightCircle className="ml-2 w-5 h-5" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </main>

//       {/* Features Section */}
//       <section className="w-full py-20 bg-slate-50">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
//             Unlock Creative Superpowers
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
//               <div className="w-14 h-14 mx-auto flex items-center justify-center bg-orange-100 rounded-full mb-4">
//                 <Lightbulb className="h-7 w-7 text-orange-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Smart Writing
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Generate polished articles, scripts, and marketing copy
//                 effortlessly.
//               </p>
//             </div>
//             <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
//               <div className="w-14 h-14 mx-auto flex items-center justify-center bg-pink-100 rounded-full mb-4">
//                 <Camera className="h-7 w-7 text-pink-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Social Snaps
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Create scroll-stopping captions, hashtags, and visual concepts
//                 in seconds.
//               </p>
//             </div>
//             <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
//               <div className="w-14 h-14 mx-auto flex items-center justify-center bg-indigo-100 rounded-full mb-4">
//                 <Terminal className="h-7 w-7 text-indigo-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Dev Assistant
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Generate code snippets and logic in multiple languages—fast and
//                 error-free.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="w-full py-6 bg-white border-t">
//         <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
//           <p className="text-sm text-gray-500">
//             © 2025 IdeaForge. All rights reserved.
//           </p>
//           <nav className="flex gap-4 mt-4 md:mt-0 text-sm text-gray-600">
//             <Link href="#">Help Center</Link>
//             <Link href="#">Feedback</Link>
//             <Link href="#">Policies</Link>
//           </nav>
//         </div>
//       </footer>
//     </div>
//   );
// }

// "use client";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Lightbulb, Camera, Terminal, ArrowRightCircle } from "lucide-react";
// import { UserButton, useClerk } from "@clerk/nextjs";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (delay: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// export default function Home() {
//   const { user } = useClerk();

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-slate-100">
//       {/* Header */}
//       <header className="px-4 lg:px-8 py-4 flex items-center justify-between shadow-sm bg-white z-50">
//         <Link href="/" className="flex items-center space-x-2">
//           <Lightbulb className="h-6 w-6 text-orange-600" />
//           <span className="text-xl font-extrabold text-gray-900">
//             VisionCraft
//           </span>
//         </Link>
//         <nav>
//           {user ? (
//             <UserButton />
//           ) : (
//             <Link href="/sign-in">
//               <Button variant="outline">Sign In</Button>
//             </Link>
//           )}
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <main className="flex-1 flex items-center justify-center px-4 py-20 md:py-32 text-center bg-white">
//         <motion.div
//           className="max-w-3xl"
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//         >
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
//             variants={fadeUp}
//             custom={0}
//           >
//             Transform Your <span className="text-orange-600">Ideas</span> Into
//             Reality
//           </motion.h1>
//           <motion.p
//             className="mt-4 text-lg md:text-xl text-gray-600"
//             variants={fadeUp}
//             custom={0.2}
//           >
//             Create powerful content, stunning visuals, and efficient code with
//             AI-powered tools.
//           </motion.p>
//           <motion.div className="mt-6" variants={fadeUp} custom={0.4}>
//             <Link href="/dashboard">
//               <Button
//                 size="lg"
//                 className="bg-orange-600 hover:bg-orange-700 text-white"
//               >
//                 Start Creating <ArrowRightCircle className="ml-2 w-5 h-5" />
//               </Button>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </main>

//       {/* Features Section */}
//       <section className="w-full py-20 bg-slate-50">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             Unlock Creative Superpowers
//           </motion.h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 Icon: Lightbulb,
//                 title: "Smart Writing",
//                 desc: "Generate polished articles, scripts, and marketing copy effortlessly.",
//                 color: "orange",
//               },
//               {
//                 Icon: Camera,
//                 title: "Social Snaps",
//                 desc: "Create scroll-stopping captions, hashtags, and visual concepts in seconds.",
//                 color: "pink",
//               },
//               {
//                 Icon: Terminal,
//                 title: "Dev Assistant",
//                 desc: "Generate code snippets and logic in multiple languages—fast and error-free.",
//                 color: "indigo",
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//                 custom={0.1 * index}
//               >
//                 <div
//                   className={`w-14 h-14 mx-auto flex items-center justify-center bg-${feature.color}-100 rounded-full mb-4`}
//                 >
//                   <feature.Icon
//                     className={`h-7 w-7 text-${feature.color}-600`}
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 mt-2">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="w-full py-6 bg-white border-t">
//         <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
//           <p className="text-sm text-gray-500">
//             © 2025 VISION CRAFT. All rights reserved.
//           </p>
//           <nav className="flex gap-4 mt-4 md:mt-0 text-sm text-gray-600">
//             <Link href="#">Help Center</Link>
//             <Link href="#">Feedback</Link>
//             <Link href="#">Policies</Link>
//           </nav>
//         </div>
//       </footer>
//     </div>
//   );
// }

// CURRENT LANDING PAGE

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lightbulb, Camera, Terminal, ArrowRightCircle } from "lucide-react";
import { UserButton, useClerk } from "@clerk/nextjs";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Home() {
  const { user } = useClerk();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-slate-100">
      {/* Header */}
      <header className="px-4 lg:px-8 py-4 flex items-center justify-between shadow-sm bg-white z-50">
        <Link href="/" className="flex items-center space-x-2">
          <Lightbulb className="h-6 w-6" style={{ color: "#704ef8" }} />
          <span className="text-xl font-extrabold text-gray-900">
            VisionCraft
          </span>
        </Link>
        <nav>
          {user ? (
            <UserButton />
          ) : (
            <Link href="/sign-in">
              <Button variant="outline">Sign In</Button>
            </Link>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-20 md:py-32 text-center bg-white">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
            variants={fadeUp}
            custom={0}
          >
            Transform Your <span style={{ color: "#704ef8" }}>Ideas</span> Into
            Reality
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-600"
            variants={fadeUp}
            custom={0.2}
          >
            Create powerful content, stunning visuals, and efficient code with
            AI-powered tools.
          </motion.p>
          <motion.div className="mt-6" variants={fadeUp} custom={0.4}>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="text-white"
                style={{ backgroundColor: "#704ef8" }}
              >
                Start Creating <ArrowRightCircle className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </main>

      {/* Features Section */}
      <section className="w-full py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Unlock Creative Superpowers
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: Lightbulb,
                title: "Smart Writing",
                desc: "Generate polished articles, scripts, and marketing copy effortlessly.",
              },
              {
                Icon: Camera,
                title: "Social Snaps",
                desc: "Create scroll-stopping captions, hashtags, and visual concepts in seconds.",
              },
              {
                Icon: Terminal,
                title: "Dev Assistant",
                desc: "Generate code snippets and logic in multiple languages—fast and error-free.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0.1 * index}
              >
                <div
                  className="w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4"
                  style={{ backgroundColor: "#e6e0ff" }}
                >
                  <feature.Icon
                    className="h-7 w-7"
                    style={{ color: "#704ef8" }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            © 2025 VisionCraft. All rights reserved.
          </p>
          <nav className="flex gap-4 mt-4 md:mt-0 text-sm text-gray-600">
            <Link href="#">Help Center</Link>
            <Link href="#">Feedback</Link>
            <Link href="#">Policies</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

//NEW LANDING PAGE

// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Header from "./dashboard/_components/Header";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
//         <nav
//           className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
//           aria-label="Global"
//         >
//           <div className="flex items-center justify-between">
//             <a
//               className="flex-none text-xl font-semibold dark:text-white"
//               href="#"
//               aria-label="Brand"
//             >
//               VisionCraft
//             </a>
//             <div>
//               <button
//                 type="button"
//                 className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
//                 data-hs-collapse="#navbar-collapse-with-animation"
//                 aria-controls="navbar-collapse-with-animation"
//                 aria-label="Toggle navigation"
//               >
//                 <Image src={"/logo.svg"} alt="logo" width={150} height={150} />
//               </button>
//             </div>
//           </div>
//           <div
//             id="navbar-collapse-with-animation"
//             className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
//           >
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
//               <Link
//                 href="/dashboard"
//                 className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500"
//               >
//                 <svg
//                   className="flex-shrink-0 size-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   fill="currentColor"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
//                 </svg>
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </nav>
//       </header>
//       <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
//         <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
//           <div className="flex justify-center">
//             <a
//               className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200"
//               href="https://github.com/shohail-DeV/Creator-AI"
//               target="_blank"
//             >
//               CreatorAI Membership - Join Now
//               <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
//                 <svg
//                   className="flex-shrink-0 size-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 >
//                   <path d="m9 18 6-6-6-6" />
//                 </svg>
//               </span>
//             </a>
//           </div>

//           <div className="mt-5 max-w-2xl text-center mx-auto">
//             <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
//               AI Content
//               <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
//                 {" "}
//                 Generator
//               </span>
//             </h1>
//           </div>

//           <div className="mt-5 max-w-3xl text-center mx-auto">
//             <p className="text-lg text-gray-600 dark:text-neutral-400">
//               Revolutionize your content creation with our AI-powered app,
//               delivering engaging and high-quality text in seconds.
//             </p>
//           </div>

//           <div className="mt-8 gap-3 flex justify-center">
//             <a
//               className="inline-flex justify-center items-center
//       gap-x-3 text-center bg-gradient-to-tl from-blue-600
//        to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
//               href="/dashboard"
//             >
//               Get started
//               <svg
//                 className="flex-shrink-0 size-4"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path d="m9 18 6-6-6-6" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
//           <a
//             className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
//             href="#"
//           >
//             <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
//               <svg
//                 className="flex-shrink-0 size-6 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <rect width="10" height="14" x="3" y="8" rx="2" />
//                 <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
//                 <path d="M8 18h.01" />
//               </svg>
//             </div>
//             <div className="mt-5">
//               <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
//                 25+ templates
//               </h3>
//               <p className="mt-1 text-gray-600 dark:text-neutral-400">
//                 Responsive, and mobile-first project on the web
//               </p>
//               <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
//                 Learn more
//                 <svg
//                   className="flex-shrink-0 size-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 >
//                   <path d="m9 18 6-6-6-6" />
//                 </svg>
//               </span>
//             </div>
//           </a>

//           <a
//             className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
//             href="#"
//           >
//             <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
//               <svg
//                 className="flex-shrink-0 size-6 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path d="M20 7h-9" />
//                 <path d="M14 17H5" />
//                 <circle cx="17" cy="17" r="3" />
//                 <circle cx="7" cy="7" r="3" />
//               </svg>
//             </div>
//             <div className="mt-5">
//               <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
//                 Customizable
//               </h3>
//               <p className="mt-1 text-gray-600 dark:text-neutral-400">
//                 Components are easily customized and extendable
//               </p>
//               <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
//                 Learn more
//                 <svg
//                   className="flex-shrink-0 size-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 >
//                   <path d="m9 18 6-6-6-6" />
//                 </svg>
//               </span>
//             </div>
//           </a>

//           <a
//             className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
//             href="#"
//           >
//             <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
//               <svg
//                 className="flex-shrink-0 size-6 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//                 <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//               </svg>
//             </div>
//             <div className="mt-5">
//               <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
//                 Free to Use
//               </h3>
//               <p className="mt-1 text-gray-600 dark:text-neutral-400">
//                 Every component and plugin is well documented
//               </p>
//               <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
//                 Learn more
//                 <svg
//                   className="flex-shrink-0 size-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 >
//                   <path d="m9 18 6-6-6-6" />
//                 </svg>
//               </span>
//             </div>
//           </a>

//           <a
//             className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
//             href="#"
//           >
//             <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
//               <svg
//                 className="flex-shrink-0 size-6 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
//                 <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
//               </svg>
//             </div>
//             <div className="mt-5">
//               <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
//                 24/7 Support
//               </h3>
//               <p className="mt-1 text-gray-600 dark:text-neutral-400">
//                 Contact us 24 hours a day, 7 days a week
//               </p>
//               <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
//                 Learn more
//                 <svg
//                   className="flex-shrink-0 size-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 >
//                   <path d="m9 18 6-6-6-6" />
//                 </svg>
//               </span>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
