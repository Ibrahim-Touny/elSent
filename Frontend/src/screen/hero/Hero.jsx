import { Container, Title ,Body, PrimaryButton,Caption } from "../../components/common/Design";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlinePropertySafety } from "react-icons/ai";
import PropTypes from "prop-types"
export const User1 = "https://icon-icons.com/icon/female-woman-user-people-avatar/85204";
export const User2 = "https://cdn-icons-png.flaticon.com/128/236/236832.png";
export const User3 = "https://cdn-icons-png.flaticon.com/128/236/236831.png";
export const User4 = "https://cdn-icons-png.flaticon.com/128/1154/1154448.png";;
export const Hero = () => {
  return (
    <>
      <section className="hero bg-primary py-8">
        <Container className="flex items-center justify-between md:flex-row flex-col">
          <div className="w-full md:w-1/2 text-white pr-12 mt-16">
            <Title level={3} className="text-white">
              Exquisite Luxury Jewelry
            </Title>
            <Body className="leading-7 text-gray-200 my-8">
              Nulla facilisi. Maecenas ac tellus ut ligula interdum convallis. Nullam dapibus on erat in dolor posuere, none hendrerit lectus ornare. Suspendisse sit amet turpina sagittis, ultrices dui et, aliquam urna.
            </Body>
            <SearchBox />
            <div className="flex items-center gap-8 my-8">
              <div>
                <Title level={4} className="text-white">
                  5.6k
                </Title>
                <Body className="leading-7 text-gray-200">Products Monthly</Body>
              </div>
              <div>
                <Title level={4} className="text-white">
                  842M
                </Title>
                <Body className="leading-7 text-gray-200">Total Auction</Body>
              </div>
              <div>
                <Title level={4} className="text-white">
                  54
                </Title>
                <Body className="leading-7 text-gray-200">Total Category</Body>
              </div>
            </div> 
          </div>

          <div className="w-full md:w-1/2 my-16 relative py-16">
            <img src="/images/home/2.png" alt="Jewelry" className="w-2/3 md:w-4/5" />
            <div className="horiz-move absolute md:top-20 top-8 left-0"> 
                <Box title="Proof of quality" desc="Lorem Ipsum Dolar Amet" />
            </div>
            <div className="horiz-move absolute bottom-16 right-0">
              <Box title="Safe and secure" desc="Lorem Ipsum Dolar Amet" />
            </div>
            <div className="px-5 py-4 bg-white shadow-md flex items-center gap-5 rounded-xl ml-[-20px] -mt-5 vert-move w-1/3">
  <Title>58M Happy Client</Title>
</div>
        </div>
        </Container>
      </section>
      <div className="bg-white w-full py-16 -mt-10 rounded-t-[40px]"></div>
    </>
  );
};

export const SearchBox = () => {
  return (
    <>
      <form>
        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-800 sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
            <IoSearchOutline color="black" size={25} />
          </div>
          <input
            type="text"
            id="search"
            className="block shadow-md w-full p-6 ps-16 text-sm text-gray-800 rounded-full bg-gray-50 outline-none"
            placeholder="Search product..."
          />
          <PrimaryButton className="absolute end-2.5 bottom-2 bg-primary">Search</PrimaryButton>
        </div>
      </form>
    </>
  );
};

const Box = ({ title, desc }) => {
    return (
      <>
        <div className="px-5 py-4 bg-white shadow-md flex items-center gap-5 rounded-xl w-auto">
          <div className="w-14 h-14 bg-green_100 flex items-center justify-center rounded-full">
            <AiOutlinePropertySafety size={27} className="text-primary" />
          </div>
          <div>
            <Title>{title}</Title>
            <Caption>{desc}</Caption>
          </div>
        </div>
      </>
    );
  };

Box.propTypes = {
    title: PropTypes.any,
    desc: PropTypes.any,
  };
