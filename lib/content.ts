export const navLinks = [
  { href: "#tinh-huong", label: "Tình huống", section: "tinh-huong" },
  { href: "#van-hoa", label: "Văn hóa", section: "van-hoa" },
  { href: "#dao-duc", label: "Đạo đức", section: "dao-duc" },
  { href: "#con-nguoi", label: "Con người", section: "con-nguoi" },
  { href: "#van-dung", label: "Vận dụng", section: "van-dung" },
] as const;

export const heroContent = {
  eyebrow: "Môn Tư tưởng Hồ Chí Minh · Chương VI · Bài thuyết trình nhóm",
  title: "Tư tưởng Hồ Chí Minh\nvề Văn hóa, Đạo đức, Con người",
  quote:
    "Văn hóa là sự tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự sinh tồn.",
  quoteFooter: "— Hồ Chí Minh, 1943",
  badges: [
    { label: "I. Văn hóa", color: "purple" as const },
    { label: "II. Đạo đức", color: "teal" as const },
    { label: "III. Con người", color: "coral" as const },
    { label: "IV. Vận dụng", color: "blue" as const },
  ],
};

export const tinhHuongContent = {
  intro:
    "Một huyện miền núi có cảnh quan đẹp, đời sống người dân còn khó khăn. Một doanh nghiệp vào đầu tư xây khu du lịch nghỉ dưỡng cao cấp với kỳ vọng nâng tầm điểm đến quốc tế, nâng tầm địa phương. Hạ tầng đường xá, sân bay nhỏ, khu resort được xây dựng rất nhanh.",
  subheading: "Nhưng sau một thời gian:",
  problems: [
    "Người dân địa phương chỉ được thuê làm lao động phổ thông, lương thấp; ít người thành diện chuyên nghiệp.",
    "Khu du lịch tách biệt khỏi cộng đồng, du khách hầu như không tiếp xúc văn hóa bản địa, sản phẩm truyền thống mất dần thị trường.",
    "Một bộ phận thanh niên bỏ học chạy theo các công việc ngắn hạn, không có định hướng lâu dài.",
  ],
  questions: [
    {
      label: "🔴 Câu hỏi 1",
      text: '"Con người là mục tiêu của phát triển" — em hãy đánh giá mức độ "thành công" thực sự của dự án du lịch này.',
      accent: "purple" as const,
    },
    {
      label: "🟢 Câu hỏi 2",
      text: 'Con người là "động lực" — vì sao không coi cộng đồng dân cư địa phương là chủ thể của sự phát triển sẽ khiến dự án khó bền vững (về văn hóa, kinh tế, xã hội)?',
      accent: "teal" as const,
    },
    {
      label: "🔵 Câu hỏi 3",
      text: "Gợi ý 2–3 giải pháp theo tinh thần tư tưởng Hồ Chí Minh để kết hợp phát triển kinh tế du lịch với nâng cao đời sống, phát huy vai trò người dân địa phương.",
      accent: "blue" as const,
    },
  ],
};

export const vanHoaContent = {
  watermark: "I",
  cultureQuote: {
    text: "Vì lẽ sinh tồn cũng như mục đích của cuộc sống, loài người mới sáng tạo và phát minh ra ngôn ngữ, chữ viết, đạo đức, pháp luật, khoa học, tôn giáo, văn học, nghệ thuật, những công cụ cho sinh hoạt hằng ngày... Toàn bộ những sáng tạo và phát minh đó tức là văn hóa.",
    footer: "— Hồ Chí Minh, 1943",
  },
  cultureMeaning:
    "Hồ Chí Minh tiếp cận văn hóa theo 4 nghĩa: (1) Nghĩa rộng nhất — tổng hợp mọi phương thức sinh hoạt của con người; (2) Nghĩa hẹp — đời sống tinh thần của xã hội, kiến trúc thượng tầng; (3) Nghĩa hẹp hơn — giáo dục, trường học, xóa mù chữ; (4) Theo \"phương thức sử dụng công cụ sinh hoạt\".",
  infoCards: [
    {
      icon: "🏛",
      title: "Văn hóa & Chính trị",
      text: "Văn hóa không thể đứng ngoài mà phải ở trong chính trị — văn hóa phục vụ nhiệm vụ chính trị; mọi hoạt động chính trị phải có hàm lượng văn hóa. Giải phóng chính trị là điều kiện để mở đường cho văn hóa phát triển.",
    },
    {
      icon: "💡",
      title: "Văn hóa & Kinh tế",
      text: 'Văn hóa thuộc kiến trúc thượng tầng — cơ sở hạ tầng vững chắc thì văn hóa mới phát triển được. Nhưng văn hóa không hoàn toàn phụ thuộc kinh tế; văn hóa có vai trò tác động tích cực trở lại kinh tế: "Có thực mới vực được đạo."',
    },
    {
      icon: "🌱",
      title: "Văn hóa & Xã hội",
      text: '"Xã hội thế nào, văn nghệ thế ấy." Giải phóng chính trị đồng nghĩa giải phóng xã hội — từ đó văn hóa mới có điều kiện phát triển. Xã hội tiến bộ thì văn hóa mới phồn thịnh.',
    },
  ],
  roleCards: [
    {
      type: "target" as const,
      title: "VĂN HÓA LÀ MỤC TIÊU",
      content:
        'Văn hóa là mục tiêu — là quyền sống, quyền sung sướng, quyền tự do, quyền mưu cầu hạnh phúc; là khát vọng của nhân dân về các giá trị chân, thiện, mỹ. Đó là xã hội dân chủ — dân là chủ và dân làm chủ — công bằng, văn minh, "ai cũng có cơm ăn áo mặc, ai cũng được học hành", con người có điều kiện phát triển toàn diện.',
    },
    {
      type: "motive" as const,
      title: "VĂN HÓA LÀ ĐỘNG LỰC",
      items: [
        "Văn hóa chính trị: soi đường cho quốc dân đi, thực hiện độc lập tự cường tự chủ.",
        "Văn hóa văn nghệ: nâng cao lòng yêu nước, lý tưởng, ý chí cách mạng.",
        'Văn hóa giáo dục: diệt giặc dốt, xóa mù chữ, "trồng người", đào tạo nguồn nhân lực.',
        "Văn hóa đạo đức: nâng cao phẩm giá, hướng con người tới chân–thiện–mỹ.",
        "Văn hóa pháp luật: bảo đảm dân chủ, trật tự, kỷ cương phép nước.",
      ],
    },
  ],
  manifesto:
    'Văn hóa là một trong bốn nội dung chính của đời sống xã hội — quan trọng ngang các vấn đề kinh tế, chính trị và xã hội. Mặt trận văn hóa là cuộc đấu tranh cách mạng trên lĩnh vực văn hóa–tư tưởng. Văn nghệ sĩ là chiến sĩ trên mặt trận đó — "ngòi bút là vũ khí sắc bén trong sự nghiệp phò chính trừ tà." Phải bám sát cuộc sống thực tiễn, ca tụng chân thật người tốt việc tốt, phê bình nghiêm khắc thói xấu như tham ô, lười biếng, lãng phí, quan liêu.',
  identityText:
    'Bản sắc văn hóa dân tộc là những giá trị văn hóa bền vững của cộng đồng — lòng yêu nước, tinh thần độc lập tự cường, ngôn ngữ, phong tục, tập quán, lễ hội. Hồ Chí Minh nhấn mạnh: "Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam." Đồng thời phải biết tiếp thu tinh hoa nhân loại: "Tây phương hay Đông phương có cái gì tốt ta học lấy để tạo ra một nền văn hóa Việt Nam." Mối quan hệ: lấy văn hóa dân tộc làm gốc — đó là điều kiện và cơ sở để tiếp thu văn hóa nhân loại.',
  timeline: [
    {
      date: "📅 1943–1945",
      text: "5 nội dung xây dựng văn hóa dân tộc: Tâm lý (tinh thần độc lập tự cường) · Luân lý (biết hy sinh vì quần chúng) · Xã hội (phúc lợi nhân dân) · Chính trị (dân quyền) · Kinh tế.",
    },
    {
      date: "📅 Kháng chiến chống Pháp",
      text: "Nền văn hóa mới mang tính chất Dân tộc – Khoa học – Đại chúng theo Đề cương Văn hóa Việt Nam 1943.",
    },
    {
      date: "📅 Thời kỳ xây dựng CNXH",
      text: "Nền văn hóa có nội dung xã hội chủ nghĩa và tính chất dân tộc. Văn hóa toàn diện, giữ cốt cách dân tộc, đảm bảo tính khoa học, tiến bộ và nhân văn.",
    },
  ],
};

export const daoDucContent = {
  watermark: "II",
  ethicsQuote: {
    text: "Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân.",
    footer: "— Sửa đổi lối làm việc, 1947",
  },
  ethicsIntro: [
    'Hồ Chí Minh coi đạo đức là gốc, là nền tảng, là tiêu chuẩn hàng đầu của người cách mạng. Đức và tài phải thống nhất: "Dạy cũng như học phải biết chú trọng cả tài lẫn đức. Đức là đạo đức cách mạng. Đó là cái gốc, rất quan trọng. Nếu không có đạo đức cách mạng thì có tài cũng vô dụng."',
    'Vai trò của đạo đức còn là thước đo lòng cao thượng: "Tuy năng lực và công việc của mỗi người khác nhau, người làm việc to, người làm việc nhỏ; nhưng ai giữ được đạo đức đều là người cao thượng."',
  ],
  standards: [
    {
      num: "01",
      title: "Trung với nước, hiếu với dân",
      text: 'Phẩm chất bao trùm và quan trọng nhất. Trung với nước: trung thành với sự nghiệp dựng nước giữ nước, làm cho "dân giàu, nước mạnh". Hiếu với dân: thương dân, tin dân, thân dân, học hỏi dân, "hết lòng hết sức phục vụ nhân dân", tôn trọng quyền làm chủ, tuyệt đối không lên mặt "quan cách mạng ra lệnh ra oai".',
      accent: "purple" as const,
    },
    {
      num: "02",
      title: "Cần, kiệm, liêm, chính, chí công vô tư",
      text: 'Cần: lao động cần cù, sáng tạo, có kế hoạch, tự lực cánh sinh. Kiệm: tiết kiệm, không xa xỉ, không hoang phí. Liêm: trong sạch, "không tham địa vị, không tham tiền tài, không tham sung sướng". Chính: thẳng thắn, đứng đắn trong mọi quan hệ. Chí công vô tư: hoàn toàn vì lợi ích chung, "lo trước thiên hạ, vui sau thiên hạ". → "Thiếu một đức thì không thành người."',
      accent: "teal" as const,
    },
    {
      num: "03",
      title: "Thương yêu con người, sống có tình có nghĩa",
      text: 'Tình yêu thương con người là phẩm chất đạo đức cao đẹp nhất, dành trước hết cho người nghèo khổ, bị áp bức, không phân biệt màu da dân tộc. "Hiểu chủ nghĩa Mác–Lênin là phải sống với nhau có tình có nghĩa. Nếu thuộc bao nhiêu sách mà sống không có tình có nghĩa thì sao gọi là hiểu được." Phải nghiêm khắc với bản thân, rộng lượng và giàu lòng vị tha với người khác.',
      accent: "coral" as const,
    },
    {
      num: "04",
      title: "Tinh thần quốc tế trong sáng",
      text: 'Tôn trọng, yêu mến và đoàn kết với giai cấp vô sản toàn thế giới, với các dân tộc bị áp bức, với nhân dân tiến bộ. Chống mọi sự chia rẽ, phân biệt chủng tộc, chủ nghĩa dân tộc hẹp hòi và bành trướng bá quyền. "Quan sơn muôn dặm một nhà, Bốn phương vô sản đều là anh em!"',
      accent: "blue" as const,
    },
  ],
  principles: [
    {
      title: "Nói đi đôi với làm, nêu gương",
      text: '"Đảng viên đi trước, làng nước theo sau." "Một tấm gương sống có giá trị hơn một trăm bài diễn văn tuyên truyền." Nói đi đôi với làm đối lập hoàn toàn với thói đạo đức giả — miệng thì nói dân chủ nhưng làm theo lối "quan" chủ.',
    },
    {
      title: "Xây đi đôi với chống",
      text: 'Xây dựng đức tính tốt đồng thời phải chống chủ nghĩa cá nhân — kẻ thù nguy hiểm nhất của đạo đức cách mạng. Chống tham ô, lãng phí, quan liêu, bệnh "làm quan cách mạng". Quan điểm "xây" đi đôi với "chống" là nét đặc sắc xuyên suốt tư tưởng Hồ Chí Minh.',
    },
    {
      title: "Tu dưỡng đạo đức suốt đời",
      text: 'Đạo đức cách mạng không phải bẩm sinh. Phải kiên trì rèn luyện trong mọi hoàn cảnh, mọi thời điểm — "như ngọc càng mài càng sáng, vàng càng luyện càng trong" — từ những việc nhỏ nhất trong cuộc sống hằng ngày.',
    },
  ],
};

export const conNguoiContent = {
  watermark: "III",
  conceptText:
    'Hồ Chí Minh tiếp cận con người toàn diện — vừa là sản phẩm của lịch sử xã hội, vừa là chủ thể sáng tạo ra lịch sử. Người nhấn mạnh bản chất tốt đẹp vốn có của con người Việt Nam: lòng yêu nước nồng nàn, cần cù, sáng tạo, nhân ái, đoàn kết. Trong tư tưởng Hồ Chí Minh: "Con người là vốn quý nhất, là nhân tố quyết định thành công của sự nghiệp cách mạng." Con người là chiến lược số một trong tư tưởng và hành động của Người.',
  targetMotive: [
    {
      type: "coral" as const,
      title: "CON NGƯỜI LÀ MỤC TIÊU",
      paragraphs: [
        "Phải giải phóng toàn diện con người qua 4 tầng nối tiếp:\nGiải phóng dân tộc → xóa bỏ ách thống trị đế quốc, giành độc lập\n→ Giải phóng xã hội → xã hội không có người bóc lột người\n→ Giải phóng giai cấp → xóa bỏ bất công, bất bình đẳng\n→ Giải phóng con người → mỗi cá nhân được tự do phát huy năng lực sáng tạo.",
        'Khát vọng của Bác: "Làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành." Mọi chính sách, mọi dự án đều phải lấy hạnh phúc con người làm đích đến sau cùng.',
      ],
    },
    {
      type: "blue" as const,
      title: "CON NGƯỜI LÀ ĐỘNG LỰC",
      leadQuotes: [
        '"Mọi việc đều do người làm ra."',
        '"Trong bầu trời không gì quý bằng nhân dân, trong thế giới không gì mạnh bằng sức mạnh đoàn kết của nhân dân."',
        '"Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong."',
      ],
      text: "Nhân dân không chỉ là đối tượng để phục vụ mà còn là chủ thể — người quyết định sự thành bại của mọi sự nghiệp. Ba động lực hàng đầu: lợi ích của dân · dân chủ của dân · sức mạnh đoàn kết toàn dân.",
    },
  ],
  qualities: [
    { icon: "🎯", text: 'Có ý thức làm chủ, tinh thần tập thể xã hội chủ nghĩa và tư tưởng "mình vì mọi người, mọi người vì mình".' },
    { icon: "💪", text: "Cần kiệm xây dựng đất nước, hăng hái bảo vệ Tổ quốc." },
    { icon: "❤️", text: "Có lòng yêu nước nồng nàn, tinh thần quốc tế trong sáng." },
    { icon: "🔬", text: "Có phương pháp làm việc khoa học, phong cách quần chúng, dân chủ, nêu gương." },
    { icon: "⭐", text: "Đặc biệt nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân." },
  ],
  centerQuote: {
    text: "Vì lợi ích trăm năm thì phải trồng người.",
    footer: "— Hồ Chí Minh",
  },
};

export const vanDungContent = {
  watermark: "IV",
  answers: [
    {
      title: 'Trả lời câu hỏi 1 — Đánh giá mức độ "thành công" thực sự',
      accent: "purple" as const,
      verdict: "❌ THẤT BẠI về văn hóa, đạo đức và con người",
      paragraphs: [
        'Nếu chỉ nhìn vào số liệu kinh tế — doanh thu, lượng khách quốc tế — dự án có vẻ "thành công". Nhưng soi qua tư tưởng Hồ Chí Minh, dự án này thất bại trên 3 phương diện:',
        "① Vi phạm \"Trung với nước, hiếu với dân\": Người dân địa phương — chủ thể của vùng đất đó — chỉ được tham gia ở vị trí lao động giản đơn, lương thấp, không được hưởng lợi ích tương xứng với tài nguyên văn hóa và thiên nhiên mà họ đã bao đời gìn giữ.",
        "② Thiếu \"chí công vô tư\": Doanh nghiệp chỉ khai thác mà không có trách nhiệm bảo tồn; lợi ích của cộng đồng bị biến thành lợi nhuận riêng — đây là biểu hiện của tư lợi, thiếu tinh thần \"lo trước thiên hạ, vui sau thiên hạ.\"",
        "③ Văn hóa bị tha hóa: Sản phẩm truyền thống mất thị trường, thanh niên bỏ học bỏ làng — văn hóa không được coi là mục tiêu và động lực, mà bị hy sinh cho tăng trưởng kinh tế ngắn hạn.",
      ],
      conclusion:
        '→ Kết luận: Dự án "thành công" về mặt kinh tế bề ngoài nhưng THẤT BẠI về văn hóa, đạo đức và con người theo tư tưởng Hồ Chí Minh — vì nó không đảm bảo "văn hóa là mục tiêu" của phát triển bền vững.',
    },
    {
      title: "Trả lời câu hỏi 2 — Vì sao không coi cộng đồng là chủ thể → khó bền vững",
      accent: "teal" as const,
      paragraphs: [
        '① Mất động lực nội tại: "Quyền hành và lực lượng đều ở nơi dân." Khi người dân không được tham gia quyết định, không được chia sẻ lợi ích, họ trở thành người ngoài trên chính mảnh đất của mình. Không có sự tham gia chủ động của cộng đồng, dự án mất đi nguồn động lực nội tại mạnh nhất — sức sáng tạo và tâm huyết của chủ thể thực sự.',
        '② Văn hóa mất gốc rễ: Chính văn hóa bản địa là giá trị cốt lõi thu hút du khách — mất nó là mất lợi thế cạnh tranh bền vững. Khu resort tách biệt khỏi cộng đồng không những làm mất "cốt cách văn hóa dân tộc" mà còn triệt tiêu sản phẩm độc đáo duy nhất mà không resort nào khác có được.',
        '③ Thế hệ tiếp theo bị gãy đứt: "Trồng người" là kế hoạch trăm năm. Khi thanh niên bỏ học theo công việc ngắn hạn, xã hội mất đi nhân tố quyết định cho tương lai. Dự án có thể tồn tại thêm 10 năm, nhưng để lại một thế hệ mất gốc, mất định hướng — đây là thất bại sâu sắc và lâu dài nhất.',
      ],
      conclusion:
        "→ Kết luận: Một dự án không lấy con người địa phương làm trung tâm và chủ thể sẽ không có tính bền vững, dù mang lại lợi nhuận ngắn hạn.",
    },
  ],
  solutions: [
    {
      title: "Giải pháp 1 — Trao quyền làm chủ và chia sẻ lợi ích thực chất",
      text: 'Thành lập cơ chế đồng quản lý giữa doanh nghiệp và đại diện cộng đồng (trưởng bản, trưởng thôn, đại diện các hộ dân). Đảm bảo ít nhất 30–40% lợi ích từ resort thuộc về cộng đồng địa phương — không chỉ là lương lao động giản đơn. Tổ chức các cuộc họp dân chủ định kỳ để người dân có quyền phản ánh, đề xuất và giám sát hoạt động. Hiện thực hóa quan điểm: "Bao nhiêu quyền hạn đều của dân, bao nhiêu lợi ích đều vì dân."',
      accent: "purple" as const,
    },
    {
      title: 'Giải pháp 2 — Xây dựng du lịch gắn văn hóa bản địa, đào tạo nghề — "trồng người"',
      text: 'Đào tạo chuyên nghiệp cho người dân địa phương ở tất cả các vị trí: quản lý, hướng dẫn viên văn hóa, nghệ nhân thủ công, đầu bếp ẩm thực địa phương. Xây dựng các tour trải nghiệm văn hóa để du khách tiếp xúc trực tiếp lễ hội, phong tục, ẩm thực bản địa. Mỗi người lao động địa phương trở thành "sứ giả văn hóa" — người giữ gìn và truyền bá "cốt cách văn hóa dân tộc" theo đúng tư tưởng Hồ Chí Minh.',
      accent: "teal" as const,
    },
    {
      title: 'Giải pháp 3 — Cam kết pháp lý bảo tồn văn hóa, không tạo "khu tách biệt"',
      text: 'Resort phải đóng góp phần trăm doanh thu vào quỹ phát triển cộng đồng địa phương (xây trường, hỗ trợ học sinh, bảo tồn di sản văn hóa). Quy hoạch không gian mở — không bao vây toàn bộ không gian sống của cộng đồng. Tổ chức định kỳ các sự kiện giao lưu văn hóa giữa du khách và người dân bản địa. Thể hiện tư tưởng: "Văn hóa không thể đứng ngoài kinh tế" — hai mặt phải song hành, không thể chỉ chọn một.',
      accent: "blue" as const,
    },
  ],
};

export const featuredQuotes = [
  {
    text: "Văn hóa là sự tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự sinh tồn.",
    footer: "— Hồ Chí Minh, 1943",
    accent: "purple" as const,
  },
  {
    text: "Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân.",
    footer: "— Sửa đổi lối làm việc, 1947",
    accent: "teal" as const,
  },
  {
    text: "Trong bầu trời không gì quý bằng nhân dân, trong thế giới không gì mạnh bằng sức mạnh đoàn kết của nhân dân.",
    footer: "— Hồ Chí Minh",
    accent: "coral" as const,
  },
  {
    text: "Vì lợi ích trăm năm thì phải trồng người.",
    footer: "— Hồ Chí Minh",
    accent: "blue" as const,
  },
];

export const footerContent = {
  line1: "Tư tưởng Hồ Chí Minh về Văn hóa, Đạo đức, Con người",
  line2: "Chương VI · Giáo trình Tư tưởng Hồ Chí Minh · Bộ GD&ĐT · 2019",
};

export type AccentColor = "purple" | "teal" | "coral" | "blue";

export const accentStyles: Record<
  AccentColor,
  { border: string; bg: string; text: string; badge: string }
> = {
  purple: {
    border: "border-purple",
    bg: "bg-purple-light",
    text: "text-purple",
    badge: "bg-purple",
  },
  teal: {
    border: "border-teal",
    bg: "bg-teal-light",
    text: "text-teal",
    badge: "bg-teal",
  },
  coral: {
    border: "border-coral",
    bg: "bg-coral-light",
    text: "text-coral",
    badge: "bg-coral",
  },
  blue: {
    border: "border-blue",
    bg: "bg-blue-light",
    text: "text-blue",
    badge: "bg-blue",
  },
};
