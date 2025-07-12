import { calculateTrendPercentage, cn } from "lib/utils";

interface Props {
  headerTitle: string;
  total: number;
  currentMonthCount: number;
  lastMonthCount: number;
}

const StatsCard = ({
  headerTitle,
  total,
  currentMonthCount,
  lastMonthCount,
}: Props) => {
  const { trend, percentage } = calculateTrendPercentage(
    currentMonthCount,
    lastMonthCount
  );
  const isIncrement = trend === "increment";
  return (
    <article className="stats-card">
      <h3 className="text-base font-medium">{headerTitle}</h3>
      <div className="content">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">{total}</h1>
          <div className="flex items-center gap-2">
            <figure className="flex items-center gap-1">
              <img
                src={`/assets/icons/${
                  isIncrement ? "arrow-up-green.svg" : "arrow-down-red.svg"
                }`}
                alt="arrow"
                className="size-5"
              />
              <figcaption
                className={cn(
                  "text-sm font-medium",
                  isIncrement ? "text-success-700" : "text-red-500"
                )}
              >
                {Math.round(percentage)}%
              </figcaption>
            </figure>
            <p className="text-sm font-medium text-gray-100 truncate">
              vs last month
            </p>
          </div>
        </div>
        <img
          src={`/assets/icons/${
            isIncrement ? "increment.svg" : "decrement.svg"
          }`}
          className="w-full xl:w-32 h-full md:h-32 xl:h-full"
          alt="trend-graph"
        />
      </div>
    </article>
  );
};

export default StatsCard;
