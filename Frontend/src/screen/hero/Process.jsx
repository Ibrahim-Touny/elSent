import { Container, Heading, Title } from "../../components/common/Design";
import { processList } from "../../assets/data";

export const Process = () => {
  return (
    <>
      <section className="process py-24 bg-primary relative">
        <div className="bg-white w-full py-20 -mt-10 rounded-b-[40px] z-10 absolute top-0"></div>
        <Container className="py-16 pt-24 text-white">
          <Heading title="How It Works" subtitle="Easy 4 steps to win" />

          <div className="content grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            {processList.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-xl flex items-center justify-center flex-col text-center transition-all duration-300 ease-in-out transform hover:scale-105"
                style={{
                  backgroundColor: "rgba(139, 125, 97, 0.2)", // Base background color
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(139, 80, 50, 0.6)"; // More brownish-red color on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(139, 125, 97, 0.2)"; // Revert to original color when mouse leaves
                }}
              >
                <div className="w-16 h-16">
                  <img src={item.cover} alt="" />
                </div>
                <Title level={5} className="my-3 font-normal text-white">
                  {item.title}
                </Title>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
        <div className="bg-white w-full py-16 rounded-t-[40px] z-10 absolute -bottom-20"></div>
      </section>
    </>
  );
};
