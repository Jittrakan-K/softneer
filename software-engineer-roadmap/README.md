# 🗺️ Roadmap สู่ Software Engineer

> จาก **Design Engineer (PLC / Industrial Automation)** สู่ **Software Engineer** เริ่มจากศูนย์

เว็บ roadmap แบบ interactive สไตล์ 2D วาดมือ แบ่งเป็น **9 ด่าน (ประมาณ 12–15 เดือน)** แต่ละด่านมีเช็กลิสต์, ไอเดียโปรเจกต์ และ **แหล่งเรียนฟรี** ทั้งภาษาไทยและภาษาอังกฤษ

## ✨ ฟีเจอร์

- 🧭 เส้นทางคดเคี้ยวที่ค่อย ๆ วาดตัวเองตามการเลื่อนหน้า
- ✅ เช็กลิสต์ทุกด่าน บันทึกความคืบหน้าไว้ในเบราว์เซอร์ (localStorage)
- 📊 แถบความคืบหน้ารวมด้านบน + confetti เมื่อจบด่าน
- 🌉 สะพานเชื่อมทักษะ PLC → Software (ST → Python, FB → Class, SFC → State Machine …)
- 📚 แหล่งเรียนฟรีกว่า 50 แหล่ง + คลังเรียนภาษาไทย
- 🎬 คลิปภาษาไทยทุกด่าน (ลิงก์ไปที่ช่อง หรือคำค้นใน YouTube)
- 📱 รองรับมือถือ

## 🛣️ ด่านทั้งหมด

| ด่าน | หัวข้อ | ระยะเวลา |
|---|---|---|
| 00 | ตั้งหลัก: Setup & Mindset | สัปดาห์ 1–2 |
| 01 | ภาษาแรก: Python | เดือน 1–3 |
| 02 | รากฐาน Computer Science | เดือน 3–5 |
| 03 | Web Frontend | เดือน 5–7 |
| 04 | Backend & Database | เดือน 7–9 |
| 05 | เครื่องมือ & DevOps | เดือน 9–10 |
| 06 | ฝีมือ Software Engineer | เดือน 10–12 |
| 07 | ไม้ตาย: Industrial Software (IIoT / SCADA) | เดือน 10–13 |
| 08 | Portfolio & หางาน | เดือน 12–15 |

## 📁 โครงสร้างไฟล์

```
.
├── index.html        # หน้าเว็บหลัก
├── css/style.css     # สไตล์ทั้งหมด
├── js/data.js        # ข้อมูลด่าน, เช็กลิสต์, แหล่งเรียน  ← แก้เนื้อหาที่นี่
├── js/app.js         # logic: วาดเส้นทาง, progress, animation
├── assets/favicon.svg
└── .nojekyll         # ให้ GitHub Pages เสิร์ฟไฟล์ตรง ๆ
```

ไม่ต้อง build และไม่มี dependency ใช้แค่ HTML + CSS + JavaScript ล้วน

## 🚀 เปิดดูในเครื่อง

ดับเบิลคลิก `index.html` ได้เลย หรือรัน local server:

```bash
python -m http.server 8000
# แล้วเปิด http://localhost:8000
```

## 🌐 นำขึ้น GitHub + เปิดเป็นเว็บ (GitHub Pages)

```bash
git init
git add .
git commit -m "Initial commit: software engineer roadmap"
git branch -M main
git remote add origin https://github.com/<username>/software-engineer-roadmap.git
git push -u origin main
```

จากนั้นใน GitHub:

1. ไปที่ **Settings → Pages**
2. ที่ **Source** เลือก **Deploy from a branch**
3. เลือก branch **`main`** และโฟลเดอร์ **`/ (root)`** แล้วกด **Save**
4. รอประมาณ 1–2 นาที เว็บจะอยู่ที่ `https://<username>.github.io/software-engineer-roadmap/`

## ✏️ แก้ไข / เพิ่มแหล่งเรียน

เปิด `js/data.js` แต่ละด่านมีรูปแบบดังนี้:

```js
{
  no: "01", c: "#ff6b5b", title: "ภาษาแรก: Python", time: "เดือน 1–3",
  checks: ["ตัวแปร, ชนิดข้อมูล ...", "..."],
  res: [
    // [ชื่อ, URL, ประเภท, ภาษา, คำอธิบาย]
    ["CS50P", "https://cs50.harvard.edu/python/", "คอร์ส", "EN", "ตัวหลักของด่านนี้"]
  ]
}
```

คลิปภาษาไทยอยู่ใน object `VIDS` ท้ายไฟล์เดียวกัน: `[ชื่อ, "@handle" หรือคำค้น, คำอธิบาย]` ถ้าขึ้นต้นด้วย `@` จะลิงก์ไปที่ช่อง YouTube ถ้าไม่ใช่จะกลายเป็นลิงก์ค้นหาใน YouTube

> ⚠️ ถ้าเปลี่ยนจำนวนหรือลำดับข้อในเช็กลิสต์ ความคืบหน้าที่บันทึกไว้เดิมอาจไม่ตรงกับข้อใหม่

## 🛠️ เทคโนโลยี

HTML5 · CSS3 (Grid, custom properties, SVG filter) · Vanilla JavaScript · Google Fonts (Mali, IBM Plex Sans Thai, Caveat, Space Mono)

## 📄 License

[MIT](LICENSE)
