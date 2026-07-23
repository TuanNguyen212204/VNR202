export const navLinks = [
  { href: "#mo-dau", label: "Mở đầu", section: "mo-dau" },
  { href: "#boi-canh", label: "Bối cảnh 1975", section: "boi-canh" },
  { href: "#thanh-tuu", label: "Thành tựu đổi mới", section: "thanh-tuu" },
  { href: "#han-che", label: "Hạn chế & nguyên nhân", section: "han-che" },
  { href: "#kinh-nghiem", label: "Kinh nghiệm", section: "kinh-nghiem" },
  { href: "#tham-nhung", label: "Tham nhũng", section: "tham-nhung" },
  { href: "#ket-luan", label: "Kết luận", section: "ket-luan" },
] as const;

export const timelineContent = {
  badge: "Mục lục",
  title: "Cấu trúc bài thuyết trình",
  subtitle: "Bài trình bày gồm bối cảnh sau 1975 và các phần chính theo giáo trình Chương 3, mục III và IV",
  items: [
    {
      id: 1,
      badge: "Bối cảnh",
      title: "Bối cảnh Việt Nam sau năm 1975",
      description: "Khó khăn sau thống nhất và yêu cầu tất yếu của công cuộc đổi mới năm 1986.",
      href: "#boi-canh",
      subItems: [
        "Hậu quả chiến tranh",
        "Khó khăn bên ngoài",
        "Hạn chế của cơ chế cũ",
        "Yêu cầu đổi mới",
      ],
    },
    {
      id: 2,
      badge: "1",
      title: "Thành tựu của công cuộc đổi mới",
      description: "Những kết quả nổi bật trên các lĩnh vực kinh tế, văn hóa - xã hội, quốc phòng - an ninh, đối ngoại và xây dựng Đảng.",
      href: "#thanh-tuu",
      subItems: [
        "Kinh tế, văn hóa - xã hội",
        "Quốc phòng, an ninh, đối ngoại",
        "Chính trị, Đảng và Nhà nước",
        "Việt Nam sau hơn 30 năm đổi mới",
      ],
    },
    {
      id: 3,
      badge: "2",
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
      id: 4,
      badge: "3",
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
      id: 5,
      badge: "4",
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
      id: 6,
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

export const contextContent = {
  badge: "Bối cảnh",
  title: "Bối cảnh Việt Nam sau năm 1975",
  intro:
    "Sau khi đất nước thống nhất, Việt Nam bước vào thời kỳ xây dựng và phát triển trong điều kiện vô cùng khó khăn.",
  closing: "Đổi mới là yêu cầu tất yếu xuất phát từ thực tiễn phát triển của đất nước.",
  items: [
    {
      id: "war-aftermath",
      year: "1975",
      title: "Hậu quả chiến tranh",
      icon: "AlertTriangle" as const,
      description:
        "Cơ sở hạ tầng bị tàn phá, sản xuất đình trệ, hàng hóa thiếu thốn và đời sống nhân dân gặp nhiều khó khăn.",
    },
    {
      id: "external",
      year: "1975–1986",
      title: "Khó khăn bên ngoài",
      icon: "Globe2" as const,
      description:
        "Việt Nam phải bảo vệ biên giới, đồng thời đối mặt với tình trạng bao vây, cô lập và cấm vận kinh tế.",
    },
    {
      id: "old-mechanism",
      year: "774%",
      title: "Hạn chế của cơ chế cũ",
      icon: "Scale" as const,
      description:
        "Cơ chế tập trung, quan liêu, bao cấp làm giảm động lực sản xuất. Hàng hóa khan hiếm, ngân sách thâm hụt và lạm phát năm 1986 lên tới khoảng 774%.",
    },
    {
      id: "doi-moi",
      year: "1986",
      title: "Yêu cầu đổi mới",
      icon: "RefreshCw" as const,
      description:
        "Trước tình trạng khủng hoảng kinh tế – xã hội, Đại hội VI tháng 12/1986 đã đề ra đường lối đổi mới toàn diện.",
    },
  ],
  process: {
    title: "Quá trình đổi mới tư duy",
    paragraphs: [
      "Quá trình đổi mới tư duy diễn ra qua nhiều bước trong các năm 1979, 1985 và 1986. Đến Đại hội VI tháng 12 năm 1986, Đảng chính thức đề ra đường lối đổi mới toàn diện.",
      "Đổi mới không thay đổi mục tiêu xây dựng chủ nghĩa xã hội, mà thay đổi tư duy, cơ chế quản lý và phương thức tổ chức thực hiện cho phù hợp với thực tiễn.",
      "Từ đây, Việt Nam chuyển từ cơ chế tập trung, bao cấp sang kinh tế hàng hóa nhiều thành phần, sau này là kinh tế thị trường định hướng xã hội chủ nghĩa.",
      "Sau hơn 30 năm thực hiện, công cuộc đổi mới đã đem lại những thành tựu to lớn, có ý nghĩa lịch sử.",
    ],
  },
};

export const humanThoughtCards = [
  {
    id: "economy",
    title: "Kinh tế",
    icon: "TrendingUp" as const,
    paragraphs: [
      "Việt Nam từng bước thoát khỏi khủng hoảng, duy trì tăng trưởng và hình thành nền kinh tế thị trường định hướng xã hội chủ nghĩa.",
      "Năm 2018, GDP tăng 7,08%, thu nhập bình quân đầu người đạt hơn 2.500 USD.",
    ],
    source:
      "Tổng cục Thống kê, Thông cáo báo chí tình hình kinh tế – xã hội năm 2018 (GDP tăng 7,08%; GDP bình quân đầu người khoảng 2.587 USD).",
  },
  {
    id: "cultureSociety",
    title: "Văn hóa và xã hội",
    icon: "Heart" as const,
    paragraphs: [
      "Đời sống nhân dân, giáo dục, y tế và an sinh xã hội được cải thiện.",
      "Tỷ lệ nghèo giảm từ khoảng 58% năm 1993 xuống khoảng 6% năm 2018.",
    ],
    source:
      "Ngân hàng Thế giới (World Bank): tỷ lệ nghèo khoảng 58% đầu thập niên 1990; giảm còn khoảng 6–7% quanh năm 2018 (VHLSS/World Bank).",
  },
  {
    id: "defenseForeign",
    title: "Quốc phòng, an ninh và đối ngoại",
    icon: "ShieldCheck" as const,
    paragraphs: [
      "Độc lập, chủ quyền và ổn định chính trị được giữ vững.",
      "Đến năm 2018, Việt Nam có quan hệ ngoại giao với 188 trong số 193 quốc gia thành viên Liên hợp quốc.",
    ],
    source:
      "Bộ Ngoại giao Việt Nam (dẫn theo Thông tấn xã Việt Nam / Báo Tin tức, 2018): quan hệ ngoại giao với 188/193 nước thành viên Liên hợp quốc.",
  },
  {
    id: "politicsParty",
    title: "Chính trị, Đảng và Nhà nước",
    icon: "Landmark" as const,
    paragraphs: [
      "Nhà nước pháp quyền xã hội chủ nghĩa và hệ thống pháp luật từng bước được hoàn thiện.",
      "Công tác xây dựng, chỉnh đốn Đảng và phòng, chống tham nhũng ngày càng được chú trọng.",
    ],
    source:
      "Giáo trình Lịch sử Đảng Cộng sản Việt Nam (Bộ GD&ĐT); Văn kiện Đại hội Đảng các khóa về xây dựng Đảng và Nhà nước pháp quyền.",
  },
];

export const achievementsClosing =
  "Những kết quả trên cho thấy công cuộc đổi mới đã tạo ra sự thay đổi toàn diện về kinh tế, xã hội và vị thế quốc tế của Việt Nam.";

export const internationalStanding = {
  title: "Việt Nam sau hơn 30 năm đổi mới",
  intro:
    "Trong mắt cộng đồng quốc tế, Việt Nam đã chuyển từ quốc gia bị bao vây, cô lập thành đối tác tin cậy, chủ động hội nhập.",
  points: [
    {
      id: "integration",
      title: "Hội nhập sâu rộng",
      text: "Việt Nam gia nhập ASEAN năm 1995, APEC năm 1998 và WTO năm 2007, mở rộng quan hệ với hầu hết các quốc gia trên thế giới.",
      source: "Bộ Ngoại giao Việt Nam; hồ sơ hội nhập quốc tế (ASEAN 1995, APEC 1998, WTO 2007).",
    },
    {
      id: "partner",
      title: "Đối tác tin cậy",
      text: "Việt Nam được đánh giá là điểm đến đầu tư hấp dẫn, môi trường chính trị ổn định và nền kinh tế tăng trưởng năng động.",
      source: "Đánh giá chung của cộng đồng quốc tế và các tổ chức kinh tế (WB, các đối tác FDI).",
    },
    {
      id: "role",
      title: "Vai trò quốc tế",
      text: "Việt Nam tham gia tích cực các diễn đàn khu vực và toàn cầu, đóng góp vào hòa bình, hợp tác và phát triển.",
      source: "Bộ Ngoại giao Việt Nam; hoạt động đối ngoại đa phương tại ASEAN, Liên hợp quốc, APEC, ASEM.",
    },
  ],
  closing:
    "Sau hơn 30 năm đổi mới, vị thế và uy tín của Việt Nam trên trường quốc tế được nâng cao rõ rệt. Từ một nước nghèo, kém phát triển do hậu quả chiến tranh, lại bị bao vây và cô lập, nhờ cải cách và hội nhập, Việt Nam đã trở thành quốc gia đang phát triển năng động, có thu nhập trung bình và là đối tác tin cậy của cộng đồng quốc tế.",
};

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
