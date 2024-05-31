import BlogPreview from "../components/BlogPreview"

export default function Home() {
    const avatarPath="/images/image-avatar.webp"
    const imagePath = "/images/illustration-article.svg"
    const entryType = "Learning"
    const publishDate = "21 Dec 2023"
    const entryTitle = "HTML & CSS foundations"
    const previewText = "These languages are the backbone of every websites, defining structure, content, and presentation."
    const author = "Greg Hooper"
  return (
    <div className="bg-yellow w-full h-screen flex justify-center items-center">
      <BlogPreview avatarPath={avatarPath} imagePath={imagePath} entryType={entryType} publishDate={publishDate} entryTitle={entryTitle} previewText={previewText} author={author} />
    </div>
  );
}
