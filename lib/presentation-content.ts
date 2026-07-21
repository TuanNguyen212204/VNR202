export const navLinks = [
  { href: "#mo-dau", label: "Mở đầu", section: "mo-dau" },
  { href: "#thanh-tuu", label: "Thành tựu đổi mới", section: "thanh-tuu" },
  { href: "#han-che", label: "Hạn chế & nguyên nhân", section: "han-che" },
  { href: "#kinh-nghiem", label: "Kinh nghiệm", section: "kinh-nghiem" },
  { href: "#tham-nhung", label: "Tham nhũng", section: "tham-nhung" },
  { href: "#ket-luan", label: "Kết luận", section: "ket-luan" },
] as const;

export const timelineContent = {
  badge: "Mục lục",
  title: "Cấu trúc bài thuyết trình",
  subtitle: "Bài trình bày gồm 5 phần chính theo giáo trình Chương 3, mục III và IV",
  items: [
    {
      id: 1,
      badge: "Phần III.1",
      title: "Thành tựu của công cuộc đổi mới",
      description: "Những kết quả nổi bật trên các lĩnh vực kinh tế, văn hóa - xã hội, quốc phòng - an ninh, đối ngoại và xây dựng Đảng.",
      href: "#thanh-tuu",
      subItems: [
        "Kinh tế tăng trưởng, hội nhập quốc tế",
        "Văn hóa - xã hội chuyển biến tích cực",
        "Quốc phòng, an ninh, đối ngoại được giữ vững",
        "Xây dựng Đảng, Nhà nước pháp quyền",
      ],
    },
    {
      id: 2,
      badge: "Phần III.2",
      title: "Hạn chế và nguyên nhân",
      description: "Những vấn đề còn tồn tại của công cuộc đổi mới và nguyên nhân khách quan, chủ quan.",
      href: "#han-che",
      subItems: [
        "Kinh tế phát triển chưa bền vững",
        "Nhiều vấn đề xã hội nảy sinh",
        "Bốn nguy cơ vẫn hiện hữu",
        "Nguyên nhân khách quan và chủ quan",
      ],
    },
    {
      id: 3,
      badge: "Phần III.3",
      title: "Kinh nghiệm của Đảng",
      description: "Năm bài học kinh nghiệm được đúc kết qua hơn 30 năm lãnh đạo công cuộc đổi mới.",
      href: "#kinh-nghiem",
      subItems: [
        "Kiên định mục tiêu, sáng tạo trong đổi mới",
        "Lấy dân làm gốc, phát huy đại đoàn kết",
        "Đổi mới toàn diện, đồng bộ, có bước đi phù hợp",
        "Đặt lợi ích quốc gia - dân tộc lên trên hết",
        "Tự đổi mới, tự chỉnh đốn Đảng",
      ],
    },
    {
      id: 4,
      badge: "Phần IV",
      title: "Nguyên nhân và tác hại của tham nhũng",
      description: "Những nguyên nhân sâu xa dẫn đến tham nhũng và hậu quả nghiêm trọng đối với đất nước.",
      href: "#tham-nhung",
      subItems: [
        "Nguyên nhân chủ quan",
        "Nguyên nhân khách quan",
        "Tác hại đối với kinh tế",
        "Tác hại đối với niềm tin, chế độ",
      ],
    },
    {
      id: 5,
      badge: "Kết luận",
      title: "Kết luận",
      description: "Tổng kết thành tựu, kinh nghiệm đổi mới và vấn đề phòng, chống tham nhũng hiện nay.",
      href: "#ket-luan",
      subItems: [],
    },
  ],
};

export const heroContent = {
  title: "Thành tựu, kinh nghiệm của công cuộc đổi mới và vấn đề tham nhũng",
  subtitle:
    "Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018).",
  badges: ["Thành tựu", "Kinh nghiệm", "Tham nhũng"],
  cta: "Bắt đầu thuyết trình",
};

export const introContent = {
  paragraphs: [
    "Sau hơn 30 năm tiến hành công cuộc đổi mới, đất nước ta đã đạt được những thành tựu to lớn, có ý nghĩa lịch sử trên tất cả các lĩnh vực kinh tế, văn hóa, xã hội, quốc phòng, an ninh và đối ngoại. Bên cạnh đó, công cuộc đổi mới cũng bộc lộ không ít hạn chế, trong đó tham nhũng là một trong những vấn đề nhức nhối nhất, đe dọa trực tiếp niềm tin của nhân dân và sự tồn vong của chế độ.",
  ],
  quote:
    "Đổi mới để phát triển, phòng chống tham nhũng để giữ vững niềm tin của nhân dân.",
};

export const humanThoughtCards = [
  {
    id: "economy",
    title: "Thành tựu về kinh tế",
    icon: "TrendingUp" as const,
    paragraphs: [
      "Sau đổi mới, nền kinh tế Việt Nam liên tục tăng trưởng khá, kinh tế vĩ mô cơ bản ổn định, lạm phát được kiểm soát. Đất nước đã ra khỏi tình trạng kém phát triển, trở thành quốc gia đang phát triển có thu nhập trung bình, quy mô GDP tăng gấp nhiều lần so với trước đổi mới.",
      "Thể chế kinh tế thị trường định hướng xã hội chủ nghĩa từng bước được hoàn thiện, các thành phần kinh tế phát triển đa dạng, hội nhập kinh tế quốc tế ngày càng sâu rộng, hạ tầng kỹ thuật, đô thị được đầu tư mạnh mẽ.",
    ],
  },
  {
    id: "cultureSociety",
    title: "Văn hóa - xã hội",
    icon: "Heart" as const,
    paragraphs: [
      "Đời sống văn hóa, tinh thần của nhân dân có nhiều chuyển biến tích cực, dân trí được nâng cao, các phong trào xây dựng đời sống văn hóa, xây dựng nông thôn mới đạt nhiều kết quả.",
      "Công tác xóa đói giảm nghèo đạt thành tựu được cộng đồng quốc tế ghi nhận, tỉ lệ hộ nghèo giảm mạnh qua từng giai đoạn, các chính sách an sinh xã hội, chăm sóc sức khỏe nhân dân ngày càng hoàn thiện.",
    ],
  },
  {
    id: "defenseForeign",
    title: "Quốc phòng, an ninh, đối ngoại",
    icon: "ShieldCheck" as const,
    paragraphs: [
      "Độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ được giữ vững; nhận thức về kết hợp phát triển kinh tế với củng cố quốc phòng, an ninh ngày càng đầy đủ và toàn diện hơn.",
      "Hoạt động đối ngoại đạt nhiều thành tựu quan trọng, Việt Nam thiết lập quan hệ ngoại giao với hầu hết các quốc gia trên thế giới, chủ động và tích cực hội nhập quốc tế, nâng cao vị thế đất nước.",
    ],
  },
  {
    id: "politicsParty",
    title: "Chính trị, xây dựng Đảng và Nhà nước",
    icon: "Landmark" as const,
    paragraphs: [
      "Nhận thức về dân chủ xã hội chủ nghĩa, xây dựng Nhà nước pháp quyền ngày càng sâu sắc, cơ chế 'Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ' được xác định rõ hơn.",
      "Công tác xây dựng, chỉnh đốn Đảng được coi là nhiệm vụ then chốt, nền tảng tư tưởng của Đảng ngày càng được khẳng định rõ ràng, góp phần củng cố vai trò lãnh đạo của Đảng trong thời kỳ mới.",
    ],
  },
];

export const cultureContent = {
  mainParagraphs: [
    "Bên cạnh những thành tựu to lớn, công cuộc đổi mới cũng bộc lộ nhiều hạn chế, yếu kém cần được nhận diện thẳng thắn để tiếp tục khắc phục, đưa đất nước phát triển nhanh và bền vững hơn.",
    "Những hạn chế đó xuất phát từ cả nguyên nhân khách quan lẫn chủ quan, trong đó nguyên nhân chủ quan được xác định là chủ yếu, đặc biệt là những yếu kém trong công tác lãnh đạo, quản lý và tổ chức thực hiện.",
    "Việc nhận thức đúng những hạn chế và nguyên nhân là cơ sở quan trọng để Đảng tiếp tục hoàn thiện đường lối, nâng cao hiệu quả lãnh đạo trong giai đoạn phát triển tiếp theo.",
  ],
  subBlocks: [
    {
      id: "economy-limit",
      title: "Kinh tế phát triển chưa bền vững",
      icon: "TrendingDown" as const,
      description:
        "Tăng trưởng chưa tương xứng với tiềm năng, kinh tế vĩ mô có giai đoạn thiếu ổn định, năng suất lao động và năng lực cạnh tranh quốc gia còn thấp.",
    },
    {
      id: "social-issue",
      title: "Nhiều vấn đề xã hội nảy sinh",
      icon: "Users" as const,
      description:
        "Một số vấn đề xã hội và quản lý xã hội chưa được nhận thức đầy đủ, giải quyết hiệu quả; một bộ phận nhân dân chưa được thụ hưởng công bằng thành quả đổi mới.",
    },
    {
      id: "four-risks",
      title: "Bốn nguy cơ vẫn hiện hữu",
      icon: "AlertTriangle" as const,
      description:
        "Các nguy cơ được Đảng cảnh báo từ năm 1994 như diễn biến hòa bình, tự diễn biến, tự chuyển hóa trong nội bộ vẫn tồn tại và có mặt diễn biến phức tạp.",
    },
    {
      id: "root-cause",
      title: "Nguyên nhân khách quan và chủ quan",
      icon: "Scale" as const,
      description:
        "Nguyên nhân khách quan do tính chất khó khăn, phức tạp, chưa có tiền lệ của công cuộc đổi mới; nguyên nhân chủ quan là chủ yếu, do công tác nghiên cứu lý luận, dự báo, quản lý cán bộ còn nhiều bất cập.",
    },
  ],
  infographicBranches: ["Kinh tế chưa bền vững", "Vấn đề xã hội", "Bốn nguy cơ", "Nguyên nhân chủ quan"],
};

export const ethicsContent = {
  intro:
    "Qua hơn 30 năm lãnh đạo công cuộc đổi mới, Đảng đã đúc kết được nhiều bài học kinh nghiệm quý báu, là cơ sở quan trọng để tiếp tục vận dụng, phát triển sáng tạo trong giai đoạn cách mạng mới.",
  quote: "Đổi mới nhưng không đổi hướng, kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
  parts: [
    {
      id: "principle",
      title: "Kiên định mục tiêu, chủ động sáng tạo",
      icon: "ShieldCheck" as const,
      content:
        "Trong suốt quá trình đổi mới, Đảng luôn kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội, đồng thời vận dụng sáng tạo chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh, kế thừa truyền thống dân tộc và tiếp thu tinh hoa văn hóa nhân loại phù hợp với điều kiện Việt Nam.",
    },
    {
      id: "content",
      title: "Lấy dân làm gốc, đổi mới toàn diện",
      icon: "Scale" as const,
      content:
        "Đổi mới phải luôn quán triệt quan điểm 'dân là gốc', vì lợi ích của nhân dân, dựa vào nhân dân và phát huy sức mạnh đại đoàn kết toàn dân tộc; đồng thời phải được tiến hành toàn diện, đồng bộ, có bước đi phù hợp, tôn trọng quy luật khách quan và bám sát thực tiễn.",
    },
    {
      id: "principles",
      title: "Ba nguyên tắc cốt lõi",
      icon: "Flame" as const,
      items: [
        "Đặt lợi ích quốc gia - dân tộc lên trên hết, kiên định độc lập tự chủ gắn với hội nhập quốc tế",
        "Kết hợp sức mạnh dân tộc với sức mạnh thời đại để xây dựng và bảo vệ Tổ quốc",
        "Thường xuyên tự đổi mới, tự chỉnh đốn Đảng, xây dựng đội ngũ cán bộ ngang tầm nhiệm vụ",
      ],
    },
  ],
};

export const studentPracticeContent = {
  intro:
    "Tham nhũng là hành vi lợi dụng chức vụ, quyền hạn để vụ lợi cá nhân, gây thiệt hại cho lợi ích của Nhà nước, quyền và lợi ích hợp pháp của tổ chức, cá nhân. Đây là một trong những nguy cơ đe dọa trực tiếp đến sự tồn vong của Đảng và chế độ, được Đảng ta xác định là 'giặc nội xâm'.",
  detail:
    "Nguyên nhân của tham nhũng đến từ cả yếu tố chủ quan và khách quan. Về chủ quan, đó là sự suy thoái về tư tưởng chính trị, đạo đức, lối sống của một bộ phận cán bộ, đảng viên; chủ nghĩa cá nhân, lối sống thực dụng, chạy theo lợi ích vật chất. Về khách quan, cơ chế quản lý kinh tế - xã hội còn nhiều kẽ hở, quyền lực chưa được kiểm soát chặt chẽ, công tác thanh tra, giám sát, xử lý vi phạm có lúc chưa nghiêm, tạo điều kiện cho tham nhũng, tiêu cực nảy sinh và phát triển.",
  closing:
    "Tham nhũng gây ra những hậu quả hết sức nghiêm trọng: làm thất thoát tài sản, ngân sách nhà nước; kìm hãm sự phát triển kinh tế - xã hội; làm suy giảm nghiêm trọng niềm tin của nhân dân đối với Đảng, Nhà nước; đồng thời đe dọa trực tiếp đến sự tồn vong của chế độ nếu không được ngăn chặn, đẩy lùi kịp thời.",
  checklist: [
    { text: "Thất thoát tài sản, ngân sách nhà nước", icon: "DollarSign" as const },
    { text: "Suy giảm niềm tin của nhân dân vào Đảng, Nhà nước", icon: "TrendingDown" as const },
    { text: "Cản trở tăng trưởng, méo mó môi trường cạnh tranh", icon: "AlertTriangle" as const },
    { text: "Làm suy yếu bộ máy, tha hóa một bộ phận cán bộ", icon: "Users" as const },
    { text: "Đe dọa sự tồn vong của chế độ nếu không ngăn chặn kịp thời", icon: "ShieldAlert" as const },
  ],
};

export const conclusionContent = {
  paragraphs: [
    "Công cuộc đổi mới hơn 30 năm qua đã mang lại cho đất nước những thành tựu to lớn, có ý nghĩa lịch sử, khẳng định con đường đi lên chủ nghĩa xã hội của Việt Nam là đúng đắn, phù hợp với thực tiễn.",
    "Bên cạnh đó, những hạn chế, đặc biệt là vấn nạn tham nhũng, vẫn là thách thức lớn, đòi hỏi Đảng và Nhà nước phải kiên quyết, kiên trì đấu tranh phòng, chống để giữ vững niềm tin của nhân dân và sự trong sạch, vững mạnh của bộ máy.",
    "Những bài học kinh nghiệm được đúc kết từ thực tiễn đổi mới chính là nền tảng quan trọng để Đảng tiếp tục lãnh đạo đất nước phát triển nhanh, bền vững trong giai đoạn tiếp theo.",
  ],
  highlight: "Đổi mới để phát triển đất nước — phòng chống tham nhũng để giữ vững niềm tin của nhân dân.",
  backToTop: "Quay lại đầu trang",
};
