import { Heading } from "../Heading/Heading";
import { Layout } from "../Layout/Layout";
import { MobileOverflow } from "../MobileOverflow/MobileOverflow";

interface ITestimonials {
  id: string;
  contents: string[];
  stars: number;
}

const testimonials: ITestimonials[] = [
  {
    id: "1",
    contents: ["The best villa in Bali."],
    stars: 5,
  },
  {
    id: "2",
    contents: ["Shplendid"],
    stars: 5,
  },
  {
    id: "3",
    contents: ["Awesome!"],
    stars: 4,
  },
];

export const Testimonials = () => {
  return (
    <Layout id="testimonials">
      <Heading>Reviews</Heading>

      <MobileOverflow>
        <div className="grid grid-cols-3 gap-x-6 lg:gap-x-12 w-[175vw] lg:w-auto">
          {testimonials.map((testimonial) => (
            <div
              className="flex flex-col items-center text-center gap-y-8"
              key={testimonial.id}
            >
              {testimonial.contents.map((item, index) => (
                <p className="text-xl" key={index}>
                  {item}
                </p>
              ))}

              <div className="flex gap-x-4 text-yellow-400">
                {[...Array(testimonial.stars)].map((_, index) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                    key={index}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MobileOverflow>
    </Layout>
  );
};
