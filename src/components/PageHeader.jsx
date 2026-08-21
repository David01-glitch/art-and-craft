export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <div className="border-b border-warmbrown/10 bg-warmwhite">
      <div className="container-content py-10 sm:py-14">
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-ink/85">{intro}</p>}
      </div>
    </div>
  )
}
