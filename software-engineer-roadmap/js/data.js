/* ข้อมูลด่าน, เช็กลิสต์ และแหล่งเรียนฟรี — แก้ที่ไฟล์นี้ได้เลย
   res: [ชื่อ, URL, ประเภท, ภาษา (TH/EN/EN/TH), คำอธิบาย] */
const STAGES = [
  { no:"00", c:"#f2b632", title:"ตั้งหลัก", en:"Setup & Mindset", time:"สัปดาห์ 1–2",
    why:"เตรียม<b>เครื่องมือ</b>ที่โปรแกรมเมอร์ใช้ทุกวัน และสร้างนิสัยการเรียนให้ติดตั้งแต่แรก",
    note:"เริ่มจากตรงนี้!", doodle:"star",
    checks:["ติดตั้ง VS Code, Git, Python และ Node.js","ใช้ Terminal พื้นฐาน: cd, ls, mkdir, cp, mv, pipe","สมัคร GitHub แล้ว push repo แรก (README แนะนำตัว)","ฝึกพิมพ์สัมผัสให้ได้ 40+ WPM (monkeytype)","วางตารางเรียน 15–20 ชม./สัปดาห์ และทำตามให้ได้ 2 สัปดาห์"],
    project:null,
    res:[
      ["The Missing Semester (MIT)","https://missing.csail.mit.edu","วิดีโอ","EN","Terminal, shell, Git, editor ที่มหาวิทยาลัยไม่ได้สอน แต่ทุกคนต้องใช้"],
      ["Learn Git Branching","https://learngitbranching.js.org","ฝึกมือ","EN/TH","เกมฝึก Git แบบภาพ เลือกเมนูภาษาไทยได้"],
      ["Pro Git (หนังสือ)","https://git-scm.com/book","หนังสือ","EN","หนังสือ Git ฉบับเต็ม อ่านออนไลน์ฟรี"],
      ["roadmap.sh","https://roadmap.sh","แผนที่","EN","แผนผังทักษะของแต่ละสายงาน ใช้เช็กว่าตอนนี้อยู่ตรงไหน"],
      ["Monkeytype","https://monkeytype.com","ฝึกมือ","EN","ฝึกพิมพ์เร็ววันละ 10 นาที"]]},
  { no:"01", c:"#ff6b5b", title:"ภาษาแรก: Python", en:"Programming Fundamentals", time:"เดือน 1–3",
    why:"Python อ่านง่ายเหมือน ST และใช้ได้ทั้ง automation, backend และ data จึงเหมาะเป็น<b>ภาษาแรก</b>",
    note:"ST มาก่อน\nPython ง่ายนิดเดียว", doodle:"snake",
    checks:["ตัวแปร, ชนิดข้อมูล, if/elif, for/while","ฟังก์ชัน, module, การจัดการ error (try/except)","โครงสร้างข้อมูล: list, dict, set, tuple","อ่าน/เขียนไฟล์ CSV และ JSON","OOP: class, inheritance, composition (เทียบกับ FB)","virtualenv, pip และการแยกโปรเจกต์"],
    project:{t:"ลองทำ",items:["แปลงโปรแกรมสายพาน/ไฟจราจรจาก ST เป็น state machine ใน Python","สคริปต์อ่าน log CSV ของเครื่องจักร แล้วสรุปเป็นรายงาน downtime"]},
    res:[
      ["CS50P: CS50's Introduction to Programming with Python","https://cs50.harvard.edu/python/","คอร์ส","EN","⭐ ตัวหลักของด่านนี้ มีโจทย์ตรวจอัตโนมัติและใบประกาศฟรี"],
      ["Automate the Boring Stuff with Python","https://automatetheboringstuff.com","หนังสือ","EN","อ่านฟรีออนไลน์ เน้นงานอัตโนมัติ เช่น Excel, ไฟล์, เว็บ (เหมาะกับสาย automation)"],
      ["Think Python 3e","https://allendowney.github.io/ThinkPython/","หนังสือ","EN","ปูพื้นฐานแนวคิด programming แบบละเอียด"],
      ["Exercism – Python Track","https://exercism.org/tracks/python","ฝึกมือ","EN","โจทย์เป็นขั้นบันได พร้อม mentor รีวิวโค้ดฟรี"],
      ["prasertcbs (YouTube)","https://www.youtube.com/@prasertcbs","วิดีโอ","TH","สอน Python, SQL ภาษาไทยละเอียดมาก มีเป็นพันคลิป"],
      ["Python Official Tutorial","https://docs.python.org/3/tutorial/","เอกสาร","EN","ฝึกอ่าน docs ตัวจริงตั้งแต่เนิ่น ๆ"]]},
  { no:"02", c:"#8f7dff", title:"รากฐาน Computer Science", en:"CS Foundations", time:"เดือน 3–5",
    why:"ส่วนที่คนเรียนเองมักข้ามไป แต่<b>สัมภาษณ์งานต้องถามแน่นอน</b> และทำให้เขียนโค้ดที่เร็วและดีขึ้น",
    note:"อย่าข้ามด่านนี้นะ", doodle:"tree",
    checks:["Big-O: วัดความเร็วและหน่วยความจำของโค้ด","Array, Linked List, Stack, Queue, Hash Map","Tree, Graph, BFS/DFS และ Recursion","Sorting & Searching (binary search)","คอมพิวเตอร์ทำงานอย่างไร: memory, process, thread","Networking: TCP/IP, HTTP, DNS","LeetCode ระดับ Easy 50 ข้อ"],
    project:null,
    res:[
      ["CS50x: Introduction to Computer Science","https://cs50.harvard.edu/x/","คอร์ส","EN","⭐ คอร์ส CS ที่ดีที่สุดสำหรับมือใหม่ เริ่มจาก C แล้วไป Python, SQL, Web"],
      ["NeetCode Roadmap","https://neetcode.io/roadmap","ฝึกมือ","EN","จัดโจทย์ LeetCode ตามหัวข้อ พร้อมวิดีโอเฉลยฟรีทุกข้อ"],
      ["VisuAlgo","https://visualgo.net","ภาพเคลื่อนไหว","EN","ดู algorithm ทำงานทีละขั้น ช่วยให้เข้าใจเร็วขึ้นมาก"],
      ["programming.in.th","https://programming.in.th","ฝึกมือ","TH","เว็บโจทย์ algorithm ของไทย มีระบบตรวจอัตโนมัติ"],
      ["Operating Systems: Three Easy Pieces","https://pages.cs.wisc.edu/~remzi/OSTEP/","หนังสือ","EN","เรื่อง process, thread, memory อ่านฟรีทุกบท"],
      ["Teach Yourself CS","https://teachyourselfcs.com","แผนที่","EN","แนะนำว่าแต่ละวิชา CS ควรเรียนจากแหล่งไหน"]]},
  { no:"03", c:"#ff9ec7", title:"Web Frontend", en:"HTML · CSS · JS · React", time:"เดือน 5–7",
    why:"สร้างสิ่งที่<b>คนอื่นมองเห็นและกดใช้ได้</b> ประสบการณ์ออกแบบ HMI ช่วยได้มากในด่านนี้",
    note:"HMI รุ่นใหม่\nบนเบราว์เซอร์", doodle:"screen",
    checks:["HTML แบบ semantic และ CSS Flexbox/Grid","Responsive design (มือถือ + desktop)","JavaScript ES6+, DOM, fetch, async/await","TypeScript พื้นฐาน","React: component, state, props, hooks","Accessibility พื้นฐาน"],
    project:{t:"ลองทำ",items:["เว็บ Portfolio ส่วนตัว (deploy ขึ้น GitHub Pages)","ต่อยอดเว็บ PLC Simulator ของคุณ: HMI dashboard แสดงสถานะ I/O แบบ real-time"]},
    res:[
      ["The Odin Project – Full Stack JavaScript","https://www.theodinproject.com","คอร์ส","EN","⭐ หลักสูตรเต็มที่เน้นลงมือทำโปรเจกต์จริงตลอดทาง"],
      ["freeCodeCamp – Responsive Web Design / JavaScript","https://www.freecodecamp.org/learn","คอร์ส","EN","เขียนโค้ดในเบราว์เซอร์ได้ทันที มีใบประกาศฟรี"],
      ["javascript.info","https://javascript.info","หนังสือ","EN","คู่มือ JavaScript สมัยใหม่ที่อธิบายชัดที่สุด"],
      ["MDN Web Docs","https://developer.mozilla.org/en-US/docs/Learn","เอกสาร","EN","อ้างอิงหลักของ HTML/CSS/JS (บางหน้ามีภาษาไทย)"],
      ["TypeScript Handbook","https://www.typescriptlang.org/docs/handbook/intro.html","เอกสาร","EN","อ่านหลังจากคล่อง JS แล้ว"],
      ["react.dev/learn","https://react.dev/learn","เอกสาร","EN","บทเรียน React อย่างเป็นทางการ มีตัวอย่างให้ลองแก้"],
      ["CS50W: Web Programming with Python and JavaScript","https://cs50.harvard.edu/web/","คอร์ส","EN","ต่อจาก CS50x ได้พอดี ครอบคลุม Django + JS"]]},
  { no:"04", c:"#17a398", title:"Backend & Database", en:"API · SQL · Auth", time:"เดือน 7–9",
    why:"หัวใจของระบบจริง ได้แก่<b>เก็บข้อมูล ประมวลผล และให้บริการผ่าน API</b>",
    note:"ส่วนที่ user\nมองไม่เห็น", doodle:"db",
    checks:["สร้าง REST API ด้วย FastAPI (หรือ Node + Express)","SQL: SELECT, JOIN, GROUP BY, INDEX ด้วย PostgreSQL","ORM และ database migration","Authentication (JWT / session) + OWASP Top 10","เขียน test: pytest / Jest (unit + integration)","อ่าน API documentation และใช้ Postman"],
    project:{t:"ลองทำ",items:["ยกระดับ CALSA ให้มี backend + database + ระบบ login เต็มรูปแบบ","API บันทึกข้อมูลการผลิต (OEE) จากเครื่องจักร"]},
    res:[
      ["Full Stack Open (University of Helsinki)","https://fullstackopen.com/en/","คอร์ส","EN","⭐ React + Node + MongoDB/PostgreSQL + Testing + CI ครบในคอร์สเดียว"],
      ["SQLBolt","https://sqlbolt.com","ฝึกมือ","EN","ฝึก SQL แบบ interactive จบได้ในไม่กี่ชั่วโมง"],
      ["CS50 SQL","https://cs50.harvard.edu/sql/","คอร์ส","EN","ฐานข้อมูลเชิงลึก: design, index, optimization"],
      ["FastAPI Tutorial","https://fastapi.tiangolo.com/tutorial/","เอกสาร","EN","docs ที่ดีที่สุดตัวหนึ่ง สร้าง API ได้ทันที"],
      ["Obey the Testing Goat (TDD with Python)","https://www.obeythetestinggoat.com","หนังสือ","EN","อ่านฟรีออนไลน์ สอนเขียน test ไปพร้อมกับสร้างเว็บ"],
      ["OWASP Top 10","https://owasp.org/www-project-top-ten/","เอกสาร","EN","ช่องโหว่ความปลอดภัยที่พบบ่อยที่สุด"]]},
  { no:"05", c:"#5aa9ff", title:"เครื่องมือ & DevOps", en:"Git · Linux · Docker · CI/CD", time:"เดือน 9–10",
    why:"ทำงานเป็นทีมได้และ<b>นำของขึ้นใช้งานจริง</b>ได้ ไม่ใช่แค่ “รันได้บนเครื่องผม”",
    note:"works on my\nmachine ไม่พอ!", doodle:"box",
    checks:["Git ขั้นสูง: branch, PR, rebase, แก้ conflict","Linux และ shell scripting พื้นฐาน","Docker + docker-compose","CI/CD ด้วย GitHub Actions (รัน test อัตโนมัติ)","Deploy ขึ้น cloud (Render / Fly.io / AWS free tier)","Logging และ monitoring เบื้องต้น"],
    project:null,
    res:[
      ["Linux Journey","https://linuxjourney.com","คอร์ส","EN","เรียน Linux ทีละบท สั้น ชัด มีแบบฝึกหัด"],
      ["Docker Get Started","https://docs.docker.com/get-started/","เอกสาร","EN","บทเรียนอย่างเป็นทางการ ตั้งแต่ container แรกถึง compose"],
      ["Docker Curriculum","https://docker-curriculum.com","บทความ","EN","tutorial ยาวเรื่องเดียว อ่านจบแล้วใช้งานได้จริง"],
      ["GitHub Skills","https://skills.github.com","ฝึกมือ","EN","ฝึก GitHub Actions, PR, Pages ใน repo จริง"],
      ["GitHub Actions Docs","https://docs.github.com/actions","เอกสาร","EN","ทำ CI/CD ให้รัน test ทุกครั้งที่ push"],
      ["DevOps Roadmap","https://roadmap.sh/devops","แผนที่","EN","ใช้ดูว่าควรรู้อะไรเพิ่ม (ไม่ต้องรู้ทั้งหมด)"]]},
  { no:"06", c:"#7cc35a", title:"ฝีมือ Software Engineer", en:"Engineering Craft", time:"เดือน 10–12",
    why:"สิ่งที่แยก<b>“คนเขียนโค้ดได้” ออกจาก “Engineer”</b> คือโค้ดที่คนอื่นอ่านง่าย ดูแลง่าย และขยายต่อได้",
    note:"coder → engineer", doodle:"star",
    checks:["Clean code: การตั้งชื่อ, function เล็ก, refactoring","Design Patterns: State, Observer, Strategy, Factory","หลัก SOLID","System Design พื้นฐาน: cache, queue, load balancer","Code review และการเขียนเอกสาร","Agile / Scrum และการทำงานกับ ticket"],
    project:null,
    res:[
      ["Refactoring Guru","https://refactoring.guru","บทความ","EN/TH","Design Patterns + Refactoring มีภาพประกอบน่ารัก และมีบางส่วนเป็นภาษาไทย"],
      ["System Design Primer","https://github.com/donnemartin/system-design-primer","คลังความรู้","EN","รวมพื้นฐาน system design แบบครบ ใช้เตรียมสัมภาษณ์"],
      ["Google Engineering Practices","https://google.github.io/eng-practices/","เอกสาร","EN","วิธี code review แบบที่ Google ใช้จริง"],
      ["The Twelve-Factor App","https://12factor.net","บทความ","EN","หลัก 12 ข้อของการสร้าง web app ที่ดูแลง่าย"],
      ["martinfowler.com","https://martinfowler.com","บทความ","EN","บทความ architecture / refactoring จากผู้เชี่ยวชาญระดับตำนาน"]]},
  { no:"07", c:"#ff6b5b", title:"ไม้ตาย: Industrial Software", en:"IIoT · SCADA · Industry 4.0", time:"เดือน 10–13 (ทำคู่ขนาน)",
    why:"จุดตัดที่<b>ไม่ค่อยมีใครทำได้</b> คือคนที่เข้าใจทั้ง PLC และ software stack นี่คือจุดขายของคุณ",
    note:"จุดแข็งที่\nคนอื่นไม่มี ★", doodle:"gear",
    checks:["MQTT และ OPC UA ด้วย Python (paho-mqtt, asyncua)","Modbus TCP: อ่าน/เขียนค่าจาก PLC","Time-series DB (InfluxDB / TimescaleDB) + Grafana","Node-RED สำหรับ prototype","เข้าใจโครงสร้าง MES / SCADA / ISA-95"],
    project:{t:"โปรเจกต์ Flagship",items:["Web SCADA: PLC/Simulator → MQTT → Database → Dashboard real-time + alarm + report","เชื่อมกับเว็บ PLC Simulator ที่วางแผนไว้ จะกลายเป็นโปรเจกต์ที่โดดเด่นมาก"]},
    res:[
      ["HiveMQ MQTT Essentials","https://www.hivemq.com/mqtt/mqtt-essentials/","บทความ","EN","⭐ ซีรีส์อธิบาย MQTT ตั้งแต่พื้นฐานจนถึง QoS, retain, LWT"],
      ["HiveMQ University","https://university.hivemq.com","คอร์ส","EN","คอร์สออนไลน์ด้าน MQTT / IIoT (สมัครฟรี)"],
      ["opcua-asyncio (FreeOpcUa)","https://github.com/FreeOpcUa/opcua-asyncio","เอกสาร","EN","ไลบรารี OPC UA สำหรับ Python มีตัวอย่าง client/server"],
      ["PyModbus Docs","https://pymodbus.readthedocs.io","เอกสาร","EN","อ่าน/เขียน Modbus TCP/RTU ด้วย Python"],
      ["InfluxDB University","https://www.influxdata.com/university/","คอร์ส","EN","คอร์สฟรีเรื่อง time-series database"],
      ["Node-RED Docs & Tutorials","https://nodered.org/docs/tutorials/","เอกสาร","EN","prototype flow IIoT ได้เร็ว คล้ายเขียน CFC"],
      ["Grafana Tutorials","https://grafana.com/tutorials/","เอกสาร","EN","ทำ dashboard จาก database แบบ real-time"]]},
  { no:"08", c:"#f2b632", title:"Portfolio & หางาน", en:"Get Hired", time:"เดือน 12–15",
    why:"แปลงทุกอย่างที่ทำมาเป็น<b>หลักฐานที่ HR และหัวหน้าทีมเห็นแล้วอยากเรียกสัมภาษณ์</b>",
    note:"ด่านสุดท้าย\nสู้ ๆ!", doodle:"flag",
    checks:["3 โปรเจกต์ flagship ที่มี README, demo, test ครบ","Resume 1 หน้าแบบ ATS-friendly เน้นผลลัพธ์เป็นตัวเลข","LinkedIn + GitHub profile ให้พร้อม","ฝึก coding interview + behavioral แบบ STAR","Mock interview กับเพื่อนหรือ AI อย่างน้อย 5 ครั้ง","สมัคร 5–10 ตำแหน่ง/สัปดาห์ และเข้า meetup/community"],
    project:{t:"เล่าเรื่องให้ปัง",items:["“ผมเขียนโปรแกรมควบคุมเครื่องจักรจริงมาแล้ว ตอนนี้ผมสร้างซอฟต์แวร์ที่เชื่อมเครื่องจักรเหล่านั้นเข้ากับธุรกิจ”"]},
    res:[
      ["Tech Interview Handbook","https://www.techinterviewhandbook.org","คู่มือ","EN","⭐ ครบทั้ง resume, coding interview และ behavioral ฟรีทั้งหมด"],
      ["NeetCode 150","https://neetcode.io/practice","ฝึกมือ","EN","โจทย์ที่ออกสัมภาษณ์บ่อยที่สุด พร้อมวิดีโอเฉลย"],
      ["LeetCode (ข้อฟรี)","https://leetcode.com/problemset/","ฝึกมือ","EN","ใช้ฝึกต่อจาก NeetCode ไม่จำเป็นต้องจ่าย premium"],
      ["roadmap.sh – Backend / Full Stack","https://roadmap.sh/backend","แผนที่","EN","เทียบกับ job description ว่ายังขาดทักษะอะไร"],
      ["freeCodeCamp YouTube","https://www.youtube.com/@freecodecamp","วิดีโอ","EN","คอร์สยาวหลายชั่วโมงฟรี ใช้เติมหัวข้อที่ขาด"]]}
];

const DOODLES = {
  star:'<svg width="70" height="50" viewBox="0 0 70 50"><path d="M20 8 l4 10 11 1 -8 7 3 11 -10 -6 -10 6 3 -11 -8 -7 11 -1z" fill="#f2b632" stroke="#1f2a44" stroke-width="2.5" stroke-linejoin="round"/><path d="M50 30 q6 -10 12 0" fill="none" stroke="#1f2a44" stroke-width="2.5" stroke-linecap="round"/></svg>',
  snake:'<svg width="90" height="40" viewBox="0 0 90 40"><path d="M5 25 q10 -18 20 0 t20 0 t20 0 t15 -8" fill="none" stroke="#17a398" stroke-width="7" stroke-linecap="round"/><circle cx="80" cy="17" r="2" fill="#1f2a44"/></svg>',
  tree:'<svg width="80" height="60" viewBox="0 0 80 60"><g stroke="#1f2a44" stroke-width="2.5" fill="#fffaf0"><path d="M40 12 L20 34 M40 12 L60 34 M20 34 L10 52 M20 34 L30 52" fill="none"/><circle cx="40" cy="12" r="7" fill="#8f7dff"/><circle cx="20" cy="34" r="6" fill="#ff9ec7"/><circle cx="60" cy="34" r="6" fill="#ff9ec7"/><circle cx="10" cy="52" r="5"/><circle cx="30" cy="52" r="5"/></g></svg>',
  screen:'<svg width="80" height="56" viewBox="0 0 80 56"><rect x="6" y="4" width="64" height="40" rx="6" fill="#fffaf0" stroke="#1f2a44" stroke-width="2.5"/><path d="M14 34 l10 -10 8 6 12 -14 10 8" fill="none" stroke="#ff6b5b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 52 h20" stroke="#1f2a44" stroke-width="3" stroke-linecap="round"/></svg>',
  db:'<svg width="60" height="60" viewBox="0 0 60 60"><g stroke="#1f2a44" stroke-width="2.5"><path d="M10 12 v34 c0 6 40 6 40 0 v-34" fill="#dff4ef"/><ellipse cx="30" cy="12" rx="20" ry="6" fill="#17a398"/><path d="M10 29 c0 6 40 6 40 0" fill="none"/></g></svg>',
  box:'<svg width="80" height="56" viewBox="0 0 80 56"><g stroke="#1f2a44" stroke-width="2.5" stroke-linejoin="round"><path d="M10 30 h56 l-6 18 h-44z" fill="#5aa9ff"/><rect x="18" y="18" width="10" height="10" fill="#fffaf0"/><rect x="30" y="18" width="10" height="10" fill="#fffaf0"/><rect x="42" y="18" width="10" height="10" fill="#fffaf0"/><rect x="30" y="6" width="10" height="10" fill="#fffaf0"/></g></svg>',
  gear:'<svg width="64" height="64" viewBox="0 0 100 100"><g class="spin"><path d="M50 8 l8 0 3 12 10 4 10-7 6 6-7 10 4 10 12 3 0 8-12 3-4 10 7 10-6 6-10-7-10 4-3 12-8 0-3-12-10-4-10 7-6-6 7-10-4-10-12-3 0-8 12-3 4-10-7-10 6-6 10 7 10-4z" fill="#ff6b5b" stroke="#1f2a44" stroke-width="4" stroke-linejoin="round"/><circle cx="54" cy="54" r="14" fill="#f5eddc" stroke="#1f2a44" stroke-width="4"/></g></svg>',
  flag:'<svg width="60" height="64" viewBox="0 0 60 64"><path d="M14 60 V6" stroke="#1f2a44" stroke-width="3" stroke-linecap="round"/><path d="M14 8 q14 -6 22 2 t20 0 v22 q-10 6 -20 -2 t-22 0z" fill="#ff6b5b" stroke="#1f2a44" stroke-width="2.5" stroke-linejoin="round"/></svg>'
};

/* คลิปภาษาไทยของแต่ละด่าน
   [ชื่อ, "@handle" = ลิงก์ไปที่ช่อง | ข้อความ = คำค้นใน YouTube, คำอธิบาย] */
const VIDS = {
  "00":[
    ["สอน Git & GitHub ภาษาไทย","สอน Git GitHub ภาษาไทย เบื้องต้น","เลือกคลิปที่สอนตั้งแต่ git init จนถึง push"],
    ["KongRuksiam – Git / GitHub","KongRuksiam Git GitHub","สอนเป็นขั้นตอน ภาษาง่าย เหมาะกับมือใหม่"],
    ["Command Line / Terminal เบื้องต้น","สอนใช้ command line terminal ภาษาไทย","ใช้ cd, ls, mkdir ให้คล่อง"]],
  "01":[
    ["prasertcbs – Python","@prasertcbs","ช่องของ อ.ประเสริฐ มีคลิป Python เป็นพันคลิป ค้นตามหัวข้อที่ติดได้"],
    ["KongRuksiam – Python","@kongruksiamtutorial","คอร์ส Python ตั้งแต่พื้นฐานจนถึง OOP พร้อมตัวอย่างโปรเจกต์"],
    ["ลุงวิศวกร (Uncle Engineer) – Python","Uncle Engineer ลุงวิศวกร Python","สอน Python สำหรับวิศวกร ทั้งงาน automation และ IoT"],
    ["BorntoDev – Python","BorntoDev Python พื้นฐาน","คลิปพื้นฐานกระชับ ดูทบทวนได้เร็ว"]],
  "02":[
    ["Data Structure ภาษาไทย","สอน Data Structure ภาษาไทย","Array, Linked List, Stack, Queue, Tree"],
    ["Algorithm & Big O ภาษาไทย","สอน Algorithm Big O ภาษาไทย","วัดความเร็วของโค้ด และหาวิธีที่ดีกว่า"],
    ["9arm – อธิบายเรื่องคอมพิวเตอร์","9arm อธิบาย อัลกอริทึม","สนุก เข้าใจง่าย เหมาะดูตอนพักให้เห็นภาพรวม"],
    ["CS50 ซับไทย / สรุปภาษาไทย","CS50 ซับไทย","ใช้ดูคู่กับ CS50x ตัวจริง"]],
  "03":[
    ["KongRuksiam – HTML, CSS, JS, React","@kongruksiamtutorial","มีคอร์สเว็บครบ และมีหลายโปรเจกต์ให้ทำตาม"],
    ["React ภาษาไทย","สอน React ภาษาไทย เบื้องต้น 2026","เลือกคลิปใหม่ที่ใช้ hooks และ Vite"],
    ["TypeScript ภาษาไทย","สอน TypeScript ภาษาไทย","ดูหลังจากคล่อง JavaScript แล้ว"],
    ["BorntoDev – JavaScript","BorntoDev JavaScript","ปูพื้นฐาน JS แบบกระชับ"]],
  "04":[
    ["FastAPI ภาษาไทย","สอน FastAPI ภาษาไทย","สร้าง REST API ด้วย Python"],
    ["prasertcbs – SQL","prasertcbs SQL","SELECT, JOIN, GROUP BY อธิบายละเอียดมาก"],
    ["Node.js + Express ภาษาไทย","สอน Node.js Express ภาษาไทย","ทางเลือกถ้าอยากใช้ JavaScript ทั้ง stack"],
    ["PostgreSQL ภาษาไทย","สอน PostgreSQL ภาษาไทย","ติดตั้งและใช้งานฐานข้อมูลจริง"]],
  "05":[
    ["Docker ภาษาไทย","สอน Docker ภาษาไทย เบื้องต้น","container, image, docker-compose"],
    ["Linux command ภาษาไทย","สอน Linux command line ภาษาไทย","คำสั่งที่ใช้บ่อยบน server"],
    ["GitHub Actions / CI/CD ภาษาไทย","สอน GitHub Actions CI CD ภาษาไทย","ให้ระบบรัน test และ deploy อัตโนมัติ"]],
  "06":[
    ["Design Pattern ภาษาไทย","สอน Design Pattern ภาษาไทย","State, Observer, Strategy, Factory"],
    ["Clean Code ภาษาไทย","Clean Code ภาษาไทย สรุป","เขียนโค้ดให้คนอื่นอ่านรู้เรื่อง"],
    ["System Design ภาษาไทย","System Design ภาษาไทย","ออกแบบระบบให้รองรับผู้ใช้จำนวนมาก"]],
  "07":[
    ["MQTT ภาษาไทย","สอน MQTT ภาษาไทย IoT","publish / subscribe / broker"],
    ["Node-RED ภาษาไทย","สอน Node-RED ภาษาไทย","ต่อ flow คล้ายเขียน CFC"],
    ["Python + Modbus / PLC ภาษาไทย","Python Modbus PLC ภาษาไทย","อ่าน/เขียนค่าจาก PLC ด้วย Python"],
    ["Grafana + InfluxDB ภาษาไทย","สอน Grafana InfluxDB ภาษาไทย","ทำ dashboard ข้อมูลเครื่องจักรแบบ real-time"]],
  "08":[
    ["สัมภาษณ์งาน Software Engineer","สัมภาษณ์งาน Software Engineer ภาษาไทย","ฟังประสบการณ์จริงและคำถามที่เจอบ่อย"],
    ["เขียน Resume สาย Developer","เขียน Resume Developer ภาษาไทย","ทำ resume ให้ผ่าน ATS"],
    ["เปลี่ยนสายมาเป็นโปรแกรมเมอร์","เปลี่ยนสายงาน มาเป็น โปรแกรมเมอร์","ฟังเรื่องเล่าของคนที่เคยเปลี่ยนสายแบบเดียวกัน"]]
};
