import { rate, testimonials } from "../utils/constant";
import StarsRate from "./StarsRate";

const Testimonials = ({ rating }) => {
  return (
    <section className="m-5 flex max-sm:flex-col">
      <div className="md:w-[30%]">
        <h1 className="text-xl font-bold">Customer Reviews</h1>
        <div className="flex items-center mt-2 gap-1">
          <StarsRate rating={rating} />
          <p>{rating} out of 5</p>
        </div>
        <p className="gray">1 global rating</p>
        <div>
          {rate.map((r, key) => (
            <div
              key={key}
              className="flex items-center gap-3 justify-start my-3"
            >
              <p className="blue">{r.stars}</p>
              <div className="border-[1px] h-[30px] w-[50%]">
                <span
                  className={` bg-[#DE7921] h-[100%] block`}
                  style={{
                    width: `${r.percntage}%`,
                  }}
                ></span>
              </div>
              <p className="blue">{r.percntage}%</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-[50%]">
        {testimonials.map((t, key) => (
          <div key={key} className="mb-5 max-sm:my-5">
            <div className="flex items-center justify-start gap-3 mb-2">
              <img src={t.img} width={"8%"} alt="" />
              <p>{t.name}</p>
            </div>
            <div className="flex gap-2">
              <StarsRate rating={t.rating} />
              <p className="text-xl font-bold">{t.title}</p>
            </div>
            <p>{t.deatils}</p>
            <p className="font-bold text-[#DE7921]">
              Verified Purchase
            </p>
            <p className="font-light text-xl my-2">{t.comment}</p>
            <p className="gray">Report</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
