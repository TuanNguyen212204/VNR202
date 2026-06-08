export type IllustrationVariant =
  | "hero"
  | "intro"
  | "human"
  | "culture"
  | "ethics"
  | "practice"
  | "conclusion";

export type IllustrationSection =
  | "hero"
  | "intro"
  | "human"
  | "culture"
  | "ethics"
  | "practice"
  | "conclusion";

export type IllustrationIconName =
  | "BookOpen"
  | "Mic2"
  | "User"
  | "Heart"
  | "Users"
  | "Sprout"
  | "Flame"
  | "Scale"
  | "ShieldCheck"
  | "Sparkles"
  | "Globe2";

export type IllustrationMeta = {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  prompt: string;
  variant: IllustrationVariant;
  icon: IllustrationIconName;
  section: IllustrationSection;
};

export const illustrations: Record<string, IllustrationMeta> = {
  hero: {
    id: "hero",
    imageSrc: "/images/anh1.jpg",
    title: "Tri thức và cảm hứng",
    description: "Cuốn sách mở phát sáng, hoa sen và bản đồ Việt Nam dạng ánh sáng.",
    prompt:
      "Elegant Vietnamese educational illustration, an open book glowing with warm golden light, white lotus flowers, subtle Vietnam map outline in the background, faint Dong Son drum pattern, burgundy and gold color palette, soft cinematic lighting, clean composition, premium presentation style, no text, no watermark.",
    variant: "hero",
    icon: "BookOpen",
    section: "hero",
  },
  intro: {
    id: "intro",
    imageSrc: "/images/anh2.jpg",
    title: "Không gian thuyết trình",
    description: "Sinh viên thuyết trình trong không gian học thuật trang trọng.",
    prompt:
      "Vietnamese university students giving a respectful classroom presentation, warm golden light, open book and microphone on podium, elegant academic atmosphere, burgundy and cream color palette, soft realistic illustration style, no text, no watermark.",
    variant: "intro",
    icon: "Mic2",
    section: "intro",
  },
  "human-concept": {
    id: "human-concept",
    imageSrc: "/images/anh3.jpg",
    title: "Quan niệm về con người",
    description: "Con người gắn kết với gia đình, xã hội, dân tộc và thiên nhiên.",
    prompt:
      "Human-centered Vietnamese social illustration, one person connected with family, community, nation and nature through soft glowing lines, warm red and gold palette, elegant educational style, no text.",
    variant: "human",
    icon: "User",
    section: "human",
  },
  "human-goal": {
    id: "human-goal",
    imageSrc: "/images/anh5.jpg",
    title: "Mục tiêu của cách mạng",
    description: "Gia đình, người dân, trẻ em sống ấm no, hạnh phúc.",
    prompt:
      "Warm illustration of Vietnamese people living happily, family, workers, children, peaceful community, symbol of freedom, well-being and happiness, soft golden light, respectful tone, no text.",
    variant: "human",
    icon: "Heart",
    section: "human",
  },
  "human-motive": {
    id: "human-motive",
    imageSrc: "/images/anh6.jpg",
    title: "Động lực của cách mạng",
    description: "Nhân dân đoàn kết, cùng hướng về ánh sáng.",
    prompt:
      "Vietnamese people standing together in unity, diverse ages and occupations, moving toward warm light, symbol of people as the driving force of society, elegant semi-realistic illustration, burgundy gold palette, no text.",
    variant: "human",
    icon: "Users",
    section: "human",
  },
  "human-strategy": {
    id: "human-strategy",
    imageSrc: "/images/anh7.png",
    title: "Chiến lược trồng người",
    description: "Bàn tay nâng mầm cây từ cuốn sách, nuôi dưỡng thế hệ tương lai.",
    prompt:
      "Symbolic education illustration, hands gently holding a young green sprout growing from an open book, students in soft background, lotus and golden light, concept of nurturing future generations, no text.",
    variant: "human",
    icon: "Sprout",
    section: "human",
  },
  culture: {
    id: "culture",
    imageSrc: "/illustrations/culture-human-infographic.png",
    title: "Văn hóa và con người",
    description: "Infographic văn hóa — phát triển toàn diện và hội nhập.",
    prompt:
      "Modern Vietnamese culture infographic illustration, central human and lotus symbol, four surrounding branches representing holistic human development, healthy cultural environment, political and economic culture, international cultural integration, Dong Son drum pattern, burgundy gold cream palette, no text.",
    variant: "culture",
    icon: "Globe2",
    section: "culture",
  },
  ethics: {
    id: "ethics",
    imageSrc: "/illustrations/revolutionary-ethics.png",
    title: "Đạo đức cách mạng",
    description: "La bàn đạo đức, ngọn lửa lý tưởng và biểu tượng chính trực.",
    prompt:
      "Elegant moral values illustration, golden compass, balanced scale, protective shield, warm flame of ideals, hands holding a heart, Vietnamese cultural patterns, burgundy and gold, clean academic presentation style, no text.",
    variant: "ethics",
    icon: "Flame",
    section: "ethics",
  },
  "ethics-role": {
    id: "ethics-role",
    imageSrc: "/illustrations/revolutionary-ethics.png",
    title: "Vai trò đạo đức",
    description: "Ngọn lửa lý tưởng và trái tim phục vụ nhân dân.",
    prompt:
      "Warm flame of revolutionary ideals and heart symbol, burgundy and gold, respectful Vietnamese educational style, no text.",
    variant: "ethics",
    icon: "Flame",
    section: "ethics",
  },
  "ethics-content": {
    id: "ethics-content",
    imageSrc: "/illustrations/revolutionary-ethics.png",
    title: "Nội dung đạo đức",
    description: "Cần, kiệm, liêm, chính — nền tảng nhân cách.",
    prompt:
      "Four golden virtue symbols representing thrift, integrity, honesty and righteousness, balanced scale, burgundy gold palette, no text.",
    variant: "ethics",
    icon: "Scale",
    section: "ethics",
  },
  "ethics-principles": {
    id: "ethics-principles",
    imageSrc: "/illustrations/revolutionary-ethics.png",
    title: "Nguyên tắc rèn luyện",
    description: "Con đường tu dưỡng dẫn tới ánh sáng.",
    prompt:
      "Symbolic path of lifelong moral self-improvement, a clean road leading to warm golden light, lotus flowers along the path, calm Vietnamese educational illustration, no text.",
    variant: "ethics",
    icon: "ShieldCheck",
    section: "ethics",
  },
  practice: {
    id: "practice",
    imageSrc: "/illustrations/student-practice.png",
    title: "Sinh viên thực hành",
    description: "Học tập, giúp đỡ bạn bè và sống có trách nhiệm.",
    prompt:
      "Vietnamese university students studying in a bright library, helping each other, using laptop and smartphone responsibly, warm academic atmosphere, clean modern illustration, gold and cream tones, no text.",
    variant: "practice",
    icon: "BookOpen",
    section: "practice",
  },
  conclusion: {
    id: "conclusion",
    imageSrc: "/illustrations/conclusion-lotus-vietnam.png",
    title: "Tương lai dân tộc",
    description: "Hoa sen nở, bình minh và ánh sáng hy vọng.",
    prompt:
      "Hopeful Vietnamese conclusion illustration, sunrise light over subtle Vietnam map outline, blooming lotus, open book, golden particles, elegant burgundy and cream presentation design, inspiring and respectful, no text, no watermark.",
    variant: "conclusion",
    icon: "Sparkles",
    section: "conclusion",
  },
};

export function getIllustration(id: string): IllustrationMeta {
  const item = illustrations[id];
  if (!item) {
    throw new Error(`Illustration not found: ${id}`);
  }
  return item;
}

export const humanIllustrationIds: Record<string, string> = {
  concept: "human-concept",
  goal: "human-goal",
  motive: "human-motive",
  strategy: "human-strategy",
};

export const ethicsIllustrationIds: Record<string, string> = {
  role: "ethics-role",
  content: "ethics-content",
  principles: "ethics-principles",
};
