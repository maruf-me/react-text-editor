export const templates = [
  // ============================================
  // LMS Templates
  // ============================================
  {
    name: "Course Overview (EN)",
    html: `
<h2 style="text-align:center;"><strong>📘 Course Overview</strong></h2>
<p>Welcome to <strong>[Course Title]</strong>! In this course, you will learn practical skills in <strong>[Topic/Skill]</strong>. Our goal is to help you understand core concepts and apply them in real-world scenarios.</p>

<h3><strong>🎯 Learning Objectives</strong></h3>
<ul>
  <li>Understand key concepts of [Topic]</li>
  <li>Apply [Tools/Technologies] in projects</li>
  <li>Develop problem-solving skills</li>
  <li>Build a portfolio-ready project</li>
</ul>

<h3><strong>🧠 Course Modules</strong></h3>
<table>
  <thead><tr><th>Module</th><th>Focus Area</th></tr></thead>
  <tbody>
    <tr><td>Module 1</td><td>Introduction & Setup</td></tr>
    <tr><td>Module 2</td><td>Core Concepts & Syntax</td></tr>
    <tr><td>Module 3</td><td>Hands-on Project</td></tr>
    <tr><td>Module 4</td><td>Final Assessment & Certification</td></tr>
  </tbody>
</table>

<h3><strong>👨‍🏫 Instructor</strong></h3>
<p><strong>[Instructor Name]</strong> is an experienced professional in <strong>[Domain]</strong> with [X] years of teaching and industry experience.</p>

<hr/>
<p><em>💡 Tip: Access course resources and exercises in the "Resources" tab.</em></p>
    `,
  },
  {
    name: "Course Description (Bangla)",
    html: `
<h2 style="text-align: center"><strong>📘 কোর্স পরিচিতি</strong></h2>
<p>স্বাগতম <strong>[কোর্সের নাম]</strong>-এ! এই কোর্সে আপনি <strong>[বিষয়/দক্ষতা]</strong> সম্পর্কে বাস্তব-জ্ঞান ও হাতে-কলমে অভিজ্ঞতা অর্জন করবেন।</p>

<h3><strong>🎯 শেখার লক্ষ্য</strong></h3>
<ul>
  <li>[বিষয়]-এর মৌলিক ধারণা বোঝা</li>
  <li>[প্রযুক্তি/টুল] ব্যবহার করে প্রকল্প তৈরি করা</li>
  <li>সমস্যা-সমাধান ও ডিবাগিং দক্ষতা বৃদ্ধি</li>
  <li>একটি পোর্টফোলিও-রেডি প্রকল্প সম্পন্ন করা</li>
</ul>

<h3><strong>🧠 শেখার বিষয়বস্তু</strong></h3>
<table>
  <thead><tr><th>মডিউল</th><th>বিষয়</th></tr></thead>
  <tbody>
    <tr><td>মডিউল ১</td><td>ভূমিকা ও সেটআপ</td></tr>
    <tr><td>মডিউল ২</td><td>মৌলিক ধারণা ও সিনট্যাক্স</td></tr>
    <tr><td>মডিউল ৩</td><td>প্রকল্প ভিত্তিক অনুশীলন</td></tr>
    <tr><td>মডিউল ৪</td><td>ফাইনাল মূল্যায়ন ও সার্টিফিকেট</td></tr>
  </tbody>
</table>

<h3><strong>👨‍🏫 প্রশিক্ষক</strong></h3>
<p><strong>[প্রশিক্ষকের নাম]</strong> একজন পেশাদার ডেভেলপার এবং প্রশিক্ষক, যিনি <strong>[বিষয়]</strong> শেখানোর ক্ষেত্রে [X] বছরের অভিজ্ঞতা সম্পন্ন।</p>

<hr/>
<p><em>💡 টিপস: “Resources” সেকশন থেকে কোর্স ফাইল ডাউনলোড করুন।</em></p>
    `,
  },
  {
    name: "Lesson Content (EN)",
    html: `
<h2><strong>Lesson: [Lesson Title]</strong></h2>
<p>This lesson focuses on <strong>[Key Concept]</strong>. By the end, you'll be able to <strong>[Expected Skill]</strong>.</p>

<h3><strong>🧩 Key Concepts</strong></h3>
<ul>
  <li>Understanding [Concept]</li>
  <li>Applying [Tool/Technique]</li>
  <li>Analyzing [Real-world Example]</li>
</ul>

<h3><strong>📹 Watch & Practice</strong></h3>
<p>Follow the tutorial video and complete the exercise below to reinforce learning.</p>

<h3><strong>📝 Exercise</strong></h3>
<p>Create a [mini-project/task] using the concepts learned. Submit via the "Assignments" tab.</p>
    `,
  },
  {
    name: "Instructor Profile (EN)",
    html: `
<h2 style="text-align:center;"><strong>👩‍🏫 Instructor Profile</strong></h2>
<div style="display:flex; align-items:center; gap:20px;">
  <img src="[Instructor Photo URL]" alt="[Instructor Name]" style="width:120px; height:120px; border-radius:50%;" />
  <div>
    <h3><strong>[Instructor Name]</strong></h3>
    <p><em>[Title / Role]</em></p>
  </div>
</div>
<p>[Instructor Name] has [X] years of experience in [Domain]. Specializes in <strong>[Skills]</strong> and has trained [Number] students worldwide.</p>

<h3><strong>Expertise Areas</strong></h3>
<ul>
  <li>Web Development (React, Next.js, TypeScript)</li>
  <li>UI/UX Design</li>
  <li>Project Architecture</li>
</ul>

<h3><strong>🏆 Achievements</strong></h3>
<ul>
  <li>Top Instructor Award, 2024</li>
  <li>STAR Performer – Learn with Sumit</li>
</ul>
    `,
  },
  {
    name: "Course Summary (Quick Overview)",
    html: `
<h3><strong>📘 Course Summary</strong></h3>
<ul>
  <li><strong>Duration:</strong> [4 Weeks]</li>
  <li><strong>Skill Level:</strong> [Beginner / Intermediate / Advanced]</li>
  <li><strong>Language:</strong> [English / Bangla]</li>
  <li><strong>Certificate:</strong> Yes</li>
  <li><strong>Instructor:</strong> [Instructor Name]</li>
</ul>
<p>Start your journey in <strong>[Topic]</strong> and gain confidence in building <strong>[Outcome]</strong>. Learn by doing through practical exercises and guided projects.</p>
    `,
  },

  // ============================================
  // E-commerce Templates
  // ============================================
  {
    name: "Product Description (EN)",
    html: `
<h2 style="text-align:center;"><strong>[Product Name]</strong></h2>
<p><strong>[Product Name]</strong> is a premium product designed for <strong>[Target Audience]</strong>. It features <strong>[Key Features]</strong> and ensures <strong>[Benefits]</strong>.</p>

<h3><strong>Specifications</strong></h3>
<ul>
  <li>Material: [Material]</li>
  <li>Size/Dimensions: [Size/Dimensions]</li>
  <li>Color Options: [Color Options]</li>
  <li>Warranty: [Warranty Info]</li>
</ul>

<h3><strong>Usage Instructions</strong></h3>
<p>[Instructions]</p>

<h3><strong>Customer Reviews</strong></h3>
<p>[Testimonials]</p>
    `,
  },
  {
    name: "Promotional Banner Content",
    html: `
<h2 style="text-align:center; color:#FF5722;"><strong>🔥 Special Offer: [Offer Name]</strong></h2>
<p>Grab <strong>[Product Name]</strong> at just <strong>[Discount Price]</strong>! Offer valid till <strong>[End Date]</strong>.</p>
<p><em>Limited stock available, act fast!</em></p>
    `,
  },

  // ============================================
  // Blog Templates
  // ============================================
  {
    name: "Blog Post (EN)",
    html: `
<h1 style="text-align:center;"><strong>[Blog Title]</strong></h1>
<p>Published on <strong>[Date]</strong> by <strong>[Author]</strong></p>
<p>[Introductory Paragraph]</p>

<h2><strong>[Section Title]</strong></h2>
<p>[Section Content]</p>

<h2><strong>[Section Title]</strong></h2>
<p>[Section Content]</p>

<h3><strong>Key Takeaways</strong></h3>
<ul>
  <li>[Point 1]</li>
  <li>[Point 2]</li>
  <li>[Point 3]</li>
</ul>
    `,
  },

  // ============================================
  // ERP / Internal Notes
  // ============================================
  {
    name: "Internal Memo / Notes",
    html: `
<h2 style="text-align:center;"><strong>[Memo Title]</strong></h2>
<p><strong>Date:</strong> [Date]</p>
<p><strong>Author:</strong> [Name]</p>

<h3><strong>Summary</strong></h3>
<p>[Summary Content]</p>

<h3><strong>Action Items</strong></h3>
<ul>
  <li>[Task 1]</li>
  <li>[Task 2]</li>
  <li>[Task 3]</li>
</ul>
    `,
  },
];
