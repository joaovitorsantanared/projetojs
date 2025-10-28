interface AuthHeaderProps {
  title: string;
  description: string;
}

export function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <h1 className="text-2xl font-bold text-white" style={{ padding: "23px" }}>
        {title}
      </h1>
      <p className="text-balance text-white">
        {description}
      </p>
    </div>
  );
}