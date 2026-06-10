export const navLinks = [
  { href: "#mo-dau", label: "Mở đầu", section: "mo-dau" },
  { href: "#con-nguoi", label: "Con người", section: "con-nguoi" },
  { href: "#van-hoa", label: "Văn hóa", section: "van-hoa" },
  { href: "#dao-duc", label: "Đạo đức", section: "dao-duc" },
  { href: "#lien-he", label: "Liên hệ thực tiễn", section: "lien-he" },
  { href: "#ket-luan", label: "Kết luận", section: "ket-luan" },
] as const;

export const timelineContent = {
  badge: "Mục lục",
  title: "Cấu trúc bài thuyết trình",
  subtitle: "Bài trình bày gồm 5 phần chính theo giáo trình Chương VI",
  items: [
    {
      id: 1,
      badge: "Phần III",
      title: "Tư tưởng Hồ Chí Minh về con người",
      description: "Con người là mục tiêu, động lực và chiến lược trồng người.",
      href: "#con-nguoi",
      subItems: [
        "Quan niệm về con người",
        "Con người là mục tiêu của cách mạng",
        "Con người là động lực của cách mạng",
        "Chiến lược trồng người",
      ],
    },
    {
      id: 2,
      badge: "Phần IV.1",
      title: "Xây dựng và phát triển văn hóa, con người",
      description: "Văn hóa là nền tảng tinh thần; xây dựng con người Việt Nam phát triển toàn diện.",
      href: "#van-hoa",
      subItems: [
        "Phát triển toàn diện",
        "Môi trường văn hóa lành mạnh",
        "Văn hóa chính trị và kinh tế",
        "Hội nhập văn hóa quốc tế",
      ],
    },
    {
      id: 3,
      badge: "Phần IV.2",
      title: "Xây dựng đạo đức cách mạng",
      description: "Đạo đức là gốc của người cách mạng; rèn luyện đức và tài.",
      href: "#dao-duc",
      subItems: [
        "Vai trò đạo đức cách mạng",
        "Nội dung đạo đức cách mạng",
        "Nguyên tắc rèn luyện đạo đức",
      ],
    },
    {
      id: 4,
      badge: "Liên hệ thực tiễn",
      title: "Vận dụng với sinh viên hiện nay",
      description: "Biến lý thuyết thành hành động cụ thể trong học tập và sinh hoạt hằng ngày.",
      href: "#lien-he",
      subItems: [
        "Học tập nghiêm túc",
        "Sống trung thực, có trách nhiệm",
        "Có khát vọng cống hiến",
      ],
    },
    {
      id: 5,
      badge: "Kết luận",
      title: "Kết luận",
      description: "Tổng kết giá trị tư tưởng và ý nghĩa xây dựng con người Việt Nam hiện nay.",
      href: "#ket-luan",
      subItems: [],
    },
  ],
};

export const heroContent = {
  title: "Tư tưởng Hồ Chí Minh về con người, văn hóa và đạo đức",
  subtitle:
    "Con người là trung tâm của sự nghiệp cách mạng; văn hóa là nền tảng tinh thần của xã hội; đạo đức là gốc của người cách mạng.",
  badges: ["Con người", "Văn hóa", "Đạo đức"],
  cta: "Bắt đầu thuyết trình",
};

export const introContent = {
  paragraphs: [
    "Trong tư tưởng Hồ Chí Minh, văn hóa, đạo đức và con người có mối quan hệ rất chặt chẽ với nhau. Con người là trung tâm của sự nghiệp cách mạng; văn hóa là nền tảng tinh thần của xã hội; còn đạo đức là gốc của người cách mạng. Vì vậy, muốn xây dựng đất nước phát triển bền vững thì phải chăm lo xây dựng con người, phát triển văn hóa và rèn luyện đạo đức cách mạng.",
  ],
  quote:
    "Con người là trung tâm — văn hóa là nền tảng — đạo đức là gốc rễ.",
};

export const humanThoughtCards = [
  {
    id: "concept",
    title: "Quan niệm của Hồ Chí Minh về con người",
    icon: "User" as const,
    paragraphs: [
      "Theo Hồ Chí Minh, con người không phải là khái niệm chung chung, trừu tượng, mà là con người cụ thể trong đời sống thực tiễn. Đó là con người gắn với gia đình, quê hương, dân tộc, giai cấp, nghề nghiệp, lứa tuổi, vị trí xã hội và hoàn cảnh lịch sử cụ thể.",
      "Người nhìn nhận con người trong nhiều mối quan hệ: quan hệ với cộng đồng xã hội, quan hệ với chế độ xã hội và quan hệ với tự nhiên. Con người vừa là một cá nhân có nhu cầu, tình cảm, khát vọng riêng, vừa là thành viên của xã hội, có trách nhiệm với đất nước, với nhân dân và với cộng đồng.",
    ],
  },
  {
    id: "goal",
    title: "Con người là mục tiêu của cách mạng",
    icon: "Heart" as const,
    paragraphs: [
      "Một điểm rất quan trọng trong tư tưởng Hồ Chí Minh là cách mạng trước hết phải vì con người, vì hạnh phúc của nhân dân. Mọi đường lối, chủ trương, chính sách phải hướng tới việc làm cho dân có ăn, có mặc, có chỗ ở, có học hành.",
      "Vì vậy, độc lập dân tộc phải gắn liền với tự do, ấm no, hạnh phúc của nhân dân. Nếu đất nước độc lập mà nhân dân không được hưởng hạnh phúc, tự do thì độc lập ấy chưa có ý nghĩa trọn vẹn.",
    ],
  },
  {
    id: "motive",
    title: "Con người là động lực của cách mạng",
    icon: "Users" as const,
    paragraphs: [
      "Không chỉ là mục tiêu, con người còn là động lực quyết định thành công của cách mạng. Theo Hồ Chí Minh, mọi thắng lợi của cách mạng đều do nhân dân làm nên. Nhân dân là lực lượng sáng tạo lịch sử, là nguồn sức mạnh to lớn nhất của dân tộc.",
      "Người khẳng định: Muốn xây dựng chủ nghĩa xã hội, trước hết cần phải có những con người xã hội chủ nghĩa.",
    ],
  },
  {
    id: "strategy",
    title: "Chiến lược trồng người",
    icon: "Sprout" as const,
    paragraphs: [
      "Một nội dung nổi bật trong tư tưởng Hồ Chí Minh về con người là chiến lược trồng người. Theo Người, vì lợi ích lâu dài của dân tộc thì phải chăm lo giáo dục, đào tạo, bồi dưỡng thế hệ con người mới.",
      "Xây dựng con người không chỉ là dạy kiến thức, mà còn phải rèn luyện đạo đức, lý tưởng, lối sống, tác phong, ý thức làm chủ và trách nhiệm với cộng đồng.",
    ],
  },
];

export const cultureContent = {
  mainParagraphs: [
    "Theo tư tưởng Hồ Chí Minh, văn hóa có vai trò rất quan trọng trong đời sống xã hội. Văn hóa không chỉ là văn nghệ, lễ hội hay phong tục, mà còn là toàn bộ những giá trị tinh thần, đạo đức, lối sống, tri thức, cách ứng xử của con người.",
    "Văn hóa là nền tảng tinh thần của xã hội. Thành công hay thất bại của cá nhân, tổ chức, cộng đồng, đất nước đều liên quan đến văn hóa hoặc sự tha hóa về văn hóa. Vì vậy, phải xây dựng văn hóa trong chính trị, trong kinh tế, trong ứng xử, trong phê bình, trong lối sống và trong hoạt động xã hội.",
    "Trong giai đoạn hiện nay, xây dựng văn hóa phải gắn với xây dựng con người Việt Nam phát triển toàn diện. Con người Việt Nam cần được phát triển về nhân cách, đạo đức, trí tuệ, năng lực sáng tạo, thể chất, tâm hồn, trách nhiệm xã hội, nghĩa vụ công dân và ý thức tuân thủ pháp luật.",
  ],
  subBlocks: [
    {
      id: "holistic",
      title: "Xây dựng con người Việt Nam phát triển toàn diện",
      icon: "Sprout" as const,
      description:
        "Không chỉ học giỏi hay làm việc tốt, con người hiện nay còn cần có đạo đức, nhân cách, sức khỏe, trách nhiệm xã hội và ý thức công dân.",
    },
    {
      id: "environment",
      title: "Xây dựng môi trường văn hóa lành mạnh",
      icon: "Heart" as const,
      description:
        "Trong gia đình, nhà trường, cơ quan và không gian mạng. Gia đình hướng tới no ấm, văn minh. Nhà trường giáo dục tri thức đi đôi với đạo đức. Xã hội đấu tranh với lối sống ích kỷ, vô cảm.",
    },
    {
      id: "political",
      title: "Xây dựng văn hóa trong chính trị và kinh tế",
      icon: "Scale" as const,
      description:
        "Cán bộ, đảng viên, cơ quan nhà nước phải có văn hóa phục vụ nhân dân; doanh nghiệp kinh doanh có đạo đức, không chạy theo lợi nhuận bằng mọi giá.",
    },
    {
      id: "integration",
      title: "Hội nhập văn hóa quốc tế, giữ gìn bản sắc dân tộc",
      icon: "Globe2" as const,
      description:
        "Chủ động tiếp thu tinh hoa văn hóa nhân loại nhưng vẫn giữ gìn bản sắc dân tộc, để văn hóa Việt Nam vừa hiện đại, vừa đậm đà truyền thống.",
    },
  ],
  infographicBranches: [
    "Phát triển toàn diện",
    "Môi trường lành mạnh",
    "VH chính trị & KT",
    "Hội nhập quốc tế",
  ],
};

export const ethicsContent = {
  intro:
    "Trong tư tưởng Hồ Chí Minh, đạo đức là gốc của người cách mạng. Người có tài mà không có đức thì khó phục vụ nhân dân một cách đúng đắn. Ngược lại, có đức mà thiếu tài thì làm việc gì cũng khó. Vì vậy, con người cần rèn luyện cả đức và tài, trong đó đạo đức giữ vai trò nền tảng.",
  quote: "Đạo đức là gốc của người cách mạng.",
  parts: [
    {
      id: "role",
      title: "Vai trò của đạo đức cách mạng",
      icon: "ShieldCheck" as const,
      content:
        "Đạo đức Hồ Chí Minh là đạo đức của một lãnh tụ cách mạng, một người cộng sản ưu tú, đồng thời cũng là đạo đức của một con người chân chính, gần gũi, ai cũng có thể học tập và làm theo để trở thành người công dân tốt hơn.",
    },
    {
      id: "content",
      title: "Nội dung xây dựng đạo đức cách mạng",
      icon: "Scale" as const,
      content:
        "Xây dựng đạo đức cách mạng trước hết là rèn luyện lòng trung với nước, hiếu với dân. Người cách mạng phải đặt lợi ích của Tổ quốc, của nhân dân lên trên lợi ích cá nhân. Tiếp theo là rèn luyện các phẩm chất: cần, kiệm, liêm, chính, chí công vô tư. Ngoài ra, đạo đức cách mạng còn thể hiện ở tình yêu thương con người, tinh thần đoàn kết, tinh thần quốc tế trong sáng, biết chống lại chủ nghĩa cá nhân, lối sống thực dụng, quan liêu, tham ô, lãng phí.",
    },
    {
      id: "principles",
      title: "Nguyên tắc rèn luyện đạo đức cách mạng",
      icon: "Flame" as const,
      items: [
        "Nói đi đôi với làm, nêu gương về đạo đức",
        "Xây đi đôi với chống",
        "Tu dưỡng đạo đức suốt đời",
      ],
    },
  ],
};

export const studentPracticeContent = {
  intro:
    "Đối với sinh viên hiện nay, học tập tư tưởng Hồ Chí Minh không chỉ là học lý thuyết, mà quan trọng hơn là biết vận dụng vào hành động hằng ngày.",
  detail:
    "Sinh viên có thể bắt đầu từ những việc cụ thể như học tập nghiêm túc, sống trung thực, không gian lận trong thi cử, tôn trọng thầy cô và bạn bè, sử dụng mạng xã hội có trách nhiệm, không lan truyền tin giả, biết giúp đỡ người khác, sống giản dị, tiết kiệm và có trách nhiệm với công việc được giao.",
  closing:
    "Một sinh viên có văn hóa không chỉ là người có kiến thức, mà còn là người biết cư xử đúng mực, biết sống có trách nhiệm với bản thân, gia đình và xã hội.",
  checklist: [
    { text: "Học tập nghiêm túc", icon: "BookOpen" as const },
    { text: "Sống trung thực", icon: "ShieldCheck" as const },
    { text: "Sử dụng mạng xã hội có trách nhiệm", icon: "Smartphone" as const },
    { text: "Giúp đỡ bạn bè, tôn trọng tập thể", icon: "Users" as const },
    { text: "Có khát vọng cống hiến", icon: "Sparkles" as const },
  ],
};

export const conclusionContent = {
  paragraphs: [
    "Tóm lại, tư tưởng Hồ Chí Minh về con người, văn hóa và đạo đức có giá trị rất sâu sắc đối với cách mạng Việt Nam và đối với việc xây dựng xã hội hiện nay.",
    "Người khẳng định con người vừa là mục tiêu, vừa là động lực của cách mạng. Muốn xây dựng đất nước phát triển thì phải chăm lo xây dựng con người. Muốn con người phát triển tốt thì phải xây dựng môi trường văn hóa lành mạnh. Và muốn con người có nhân cách tốt thì phải thường xuyên rèn luyện đạo đức cách mạng.",
    "Xây dựng văn hóa, đạo đức và con người Việt Nam theo tư tưởng Hồ Chí Minh chính là xây dựng nền tảng tinh thần vững chắc cho sự phát triển bền vững của dân tộc hôm nay và mai sau.",
  ],
  highlight: "Xây dựng con người là xây dựng tương lai của dân tộc.",
  backToTop: "Quay lại đầu trang",
};
