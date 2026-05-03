/* ============================================================
   ข้อมูลสมาชิก — แก้ข้อมูลตรงนี้
   - photo  : path รูปภาพ (ใส่ใน assets/images/about/)
   - name   : ชื่อ-นามสกุล
   - role   : บทบาทในโปรเจกต์
   - id     : รหัสนิสิต
   - desc   : คำอธิบายตัวเอง
   - linkedin, instagram, facebook, cv : ลิงก์ (ใส่ # ถ้ายังไม่มี)
   ============================================================ */
var members = [
    {
        photo: 'assets1/images/about/a11.jpg',
        nickname: 'ฝ้าย',       // ← ใส่ชื่อเล่น
        name: 'พัทนันท์ ทองหล่อ',
        role: 'Quality Assurance',
        id: 'รหัสนิสิต: 67101010680',
        desc: 'ตรวจสอบคุณภาพระบบ ทดสอบการทำงานของเว็บไซต์ในทุกขั้นตอน เพื่อให้มั่นใจว่าระบบใช้งานได้ถูกต้องและไม่มีข้อผิดพลาด',
        linkedin: '#',
        instagram: 'https://www.instagram.com/faiifleurr_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        facebook: '#',
        cv: '../assets/cv/member1.pdf'
    },
    {
        photo: 'assets1/images/about/a2.jpg',
        nickname: 'เนเน่',
        name: 'ธมลวรรณ เจิมมหานนท์',
        role: 'UI/UX Designer',
        id: 'รหัสนิสิต: 67101010667',
        desc: 'ออกแบบประสบการณ์และหน้าตาเว็บไซต์ (UI/UX) ให้ใช้งานง่าย สวยงาม และเหมาะสมกับผู้ใช้งาน',
        linkedin: '#',
        instagram: 'https://www.instagram.com/juinnae?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        facebook: '#',
        cv: '../assets/cv/member2.pdf'
    },
    {
        photo: 'assets1/images/about/a3.jpg',
        nickname: 'มินนี่',
        name: 'เขมสิริ แก้วหานาม',
        role: 'Project Manager',
        id: 'รหัสนิสิต: 67101010659',
        desc: 'วางแผนและบริหารจัดการโปรเจกต์ ประสานงานภายในทีม และติดตามความคืบหน้าให้เป็นไปตามแผน',
        linkedin: '#',
        instagram: 'https://www.instagram.com/minnie_khn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        facebook: '#',
        cv: '../assets/cv/member3.pdf'
    },
    {
        photo: 'assets1/images/about/a4.jpg',
        nickname: 'คอม',
        name: 'ภูชนะ วิรัญจะ',
        role: 'Full-Stack Developer',
        id: 'รหัสนิสิต: 67101010685',
        desc: 'พัฒนาเว็บไซต์ทั้งส่วนหน้าและหลังบ้าน รวมถึงเชื่อมต่อฐานข้อมูลและดูแลการทำงานของระบบโดยรวม',
        linkedin: '#',
        instagram: 'https://www.instagram.com/pphchnx?igsh=MWh3YTlmcDd3OTk0dA==',
        facebook: '#',
        cv: '../assets/cv/member4.pdf'
    },
    {
        photo: 'assets1/images/about/a5.jpg',
        nickname: 'ขวัญข้าว',
        name: 'ธัญรดี สุรกิจพิบูลย์',
        role: 'Frontend Developer',
        id: 'รหัสนิสิต: 67101010668',
        desc: 'พัฒนาส่วนแสดงผลของเว็บไซต์ (Frontend) ให้ตรงตามแบบ และรองรับการใช้งานบนอุปกรณ์ต่าง ๆ',
        linkedin: '#',
        instagram: 'https://www.instagram.com/tttrxdee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        facebook: '#',
        cv: '../assets/cv/member5.pdf'
    },
    {
        photo: 'assets1/images/about/a6.jpg',
        nickname: 'พัชชา',
        name: 'พัชรภา เกิดวิชิต',
        role: 'Backend Developer',
        id: 'รหัสนิสิต: 67101010679',
        desc: 'พัฒนาระบบหลังบ้าน (Backend) จัดการฐานข้อมูล และสร้างฟังก์ชันการทำงานของระบบ',
        linkedin: '#',
        instagram: 'https://www.instagram.com/pppatchaa_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        facebook: '#',
        cv: '../assets/cv/member6.pdf'
    }
];

var current = -1;
var hideTimer = null;

/* ยกเลิก timer ซ่อน panel */
function cancelHideTimer() {
    if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
}

/* เริ่ม timer ซ่อน panel หลัง 180ms (เผื่อเม้าเลื่อนจากการ์ดไปยัง panel) */
function startHideTimer() {
    cancelHideTimer();
    hideTimer = setTimeout(function () {
        document.querySelectorAll('.member-col').forEach(function (c) { c.classList.remove('active'); });
        var panel = document.getElementById('detailPanel');
        panel.classList.remove('show');
        current = -1;
    }, 180);
}

/* เม้าเลื่อนเข้าการ์ด → แสดง panel ทันที */
function hoverMember(idx) {
    cancelHideTimer();
    if (current === idx) return; // ยังอยู่คนเดิม ไม่ต้อง rebuild
    current = idx;
    var m = members[idx];

    // อัปเดต active class
    document.querySelectorAll('.member-col').forEach(function (c, i) {
        c.classList.toggle('active', i === idx);
    });

    // สร้าง detail panel
    var panel = document.getElementById('detailPanel');
    panel.innerHTML =
        '<div class="detail-photo-wrap">' +
        '<img src="' + m.photo + '" alt="' + m.name + '" onerror="this.src=\'assets/images/t.jpg\'">' +
        '<label class="change-photo-btn" title="เปลี่ยนรูป" style="cursor:pointer;">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>' +
        '<span>เปลี่ยนรูป</span>' +
        '</label>' +
        '</div>' +
        '<div class="detail-info">' +
        (m.nickname ? '<div class="detail-nickname">" ' + m.nickname + ' "</div>' : '') +
        '<h2>' + m.name + '</h2>' +
        '<div class="detail-role">' + m.role + '</div>' +
        '<div class="detail-id">' + m.id + '</div>' +
        '<p class="detail-desc">' + m.desc + '</p>' +
        '<div class="social-links">' +
        (m.linkedin !== '#' ? '<a href="' + m.linkedin + '" class="social-link linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>LinkedIn</a>' : '<a href="' + m.linkedin + '" class="social-link linkedin"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>LinkedIn</a>') +
        (m.instagram !== '#' ? '<a href="' + m.instagram + '" class="social-link instagram" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>Instagram</a>' : '<a href="' + m.instagram + '" class="social-link instagram"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>Instagram</a>') +
        (m.facebook !== '#' ? '<a href="' + m.facebook + '" class="social-link facebook" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>Facebook</a>' : '<a href="' + m.facebook + '" class="social-link facebook"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>Facebook</a>') +
        '<a href="' + m.cv + '" class="social-link cv" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>CV / Resume</a>' +
        '</div>' +
        '</div>';

    panel.classList.remove('show');
    void panel.offsetWidth; // force reflow
    panel.classList.add('show');
}
