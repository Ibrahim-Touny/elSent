import { Footer } from "../../components/common/Footer";
import { Body, Caption, Container, Title } from "../../components/common/Design";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { commonClassNameOfInput } from "../../components/common/Design";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export const ProductsDetails = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="pt-24 px-8 min-h-screen">
        <Container>
          <div className="flex justify-between gap-8">
            <div className="w-1/2">
              <div className="h-[70vh]">
                <img
                  src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg"
                  alt="Product"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="w-1/2">
              <Title level={2} className="capitalize">
                Couple Wedding Ring
              </Title>

              <div className="flex gap-5">
                <div className="flex text-primary">
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStarHalf size={20} />
                  <IoIosStarOutline size={20} />
                </div>
                <Caption>(2 customer reviews)</Caption>
              </div>
              <br />
              <Body>
                Korem ipsum dolor amet, consectetur adipiscing elit. Maece nas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.
              </Body>
              <br />
              <Caption>Item condition: New</Caption>
              <br />
              <Caption>Item Verified: Yes</Caption>
              <br />
              <Caption>Time left:</Caption>

              <div className="flex gap-8 text-center">
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>149</Title>
                  <Caption>Days</Caption>
                </div>
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>12</Title>
                  <Caption>Hours</Caption>
                </div>
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>36</Title>
                  <Caption>Minutes</Caption>
                </div>
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>51</Title>
                  <Caption>Seconds</Caption>
                </div>
              </div>
              <br />
              <Title className="flex items-center gap-2">
                Auction ends: <Caption>December 31, 2024 12:00 am</Caption>
              </Title>

              <Title className="flex items-center gap-2 ">
                Timezone: <Caption>UTC 0</Caption>
              </Title>

              <Title className="flex items-center gap-2 ">
                Price: <Caption>$200</Caption>
              </Title>

              <Title className="flex items-center gap-2">
                Current bid: <Caption className="text-3xl">$500</Caption>
              </Title>

              <form className="p-5 px-10 shadow-s3 py-8 mt-5">
                <div className="flex gap-3 justify-between">
                  <input className={commonClassNameOfInput} type="number" name="price" />
                  <button type="button" className="bg-gray-100 rounded-md px-5 py-3">
                    <AiOutlinePlus />
                  </button>
                  <button
                    type="submit"
                    className="py-3 px-8 rounded-lg bg-gray-400 text-gray-700 cursor-not-allowed"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="details mt-8">
            <div className="flex items-center gap-5">
              <button
                className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "description" ? "bg-secondary text-white" : "bg-white"}`}
                onClick={() => handleTabClick("description")}
              >
                Description
              </button>
              <button
                className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "auctionHistory" ? "bg-secondary text-white" : "bg-white"}`}
                onClick={() => handleTabClick("auctionHistory")}
              >
                Auction History
              </button>
              <button
                className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "reviews" ? "bg-secondary text-white" : "bg-white"}`}
                onClick={() => handleTabClick("reviews")}
              >
                Reviews(2)
              </button>
              <button
                className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "moreProducts" ? "bg-secondary text-white" : "bg-white"}`}
                onClick={() => handleTabClick("moreProducts")}
              >
                More Products
              </button>
            </div>
          </div>

          <div className="tab-content mt-8">
            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="description-tab shadow-s3 p-8 rounded-md bg-white">
                <Title level={4}>Description</Title>
                <Caption className="leading-7 mt-5">
                  If you’ve been following the crypto space, you’ve likely heard of Non-Fungible Tokens (Biddings), more popularly referred to as ‘Crypto Collectibles.’ The world of Biddings is growing rapidly. It seems there is no slowing down of these assets as they continue to go up in price. This growth comes with the opportunity for people to start new businesses to create and capture value. The market is open for players in every kind of field. Are you a collector?
                </Caption>

                <Title level={4} className="mt-8">Product Overview</Title>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                  <div className="space-y-4">
                    <div className="flex justify-between border-b py-3">
                      <Title>Category</Title>
                      <Caption>Category</Caption>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <Title>Height</Title>
                      <Caption>200 (cm)</Caption>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <Title>Length</Title>
                      <Caption>300 (cm)</Caption>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <Title>Width</Title>
                      <Caption>400 (cm)</Caption>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <Title>Weight</Title>
                      <Caption>50 (kg)</Caption>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <Title>Medium Used</Title>
                      <Caption>Gold</Caption>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <Title>Price</Title>
                      <Caption>$50,000</Caption>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <Title>Sold Out</Title>
                      <Caption>Yes</Caption>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <Title>Verified</Title>
                      <Caption>No</Caption>
                    </div>
                    <div className="flex justify-between border-b py-3">
                      <Title>Create At</Title>
                      <Caption>December 31, 2024 12:00 am</Caption>
                    </div>
                    <div className="flex justify-between py-3">
                      <Title>Update At</Title>
                      <Caption>December 31, 2024 12:00 am</Caption>
                    </div>
                  </div>

                  <div className="h-[60vh] bg-green rounded-xl p-2">
                    <img
                      src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg"
                      alt="Product"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Auction History Tab */}
            {activeTab === "auctionHistory" && (
              <div className="auction-history-tab shadow-s3 p-8 rounded-md bg-white">
                <Title level={4}>Auction History</Title>
                {/* Auction History Content */}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div className="reviews-tab shadow-s3 p-8 rounded-md bg-white">
                <Title level={5} className="font-normal">Reviews</Title>
                <div className="flex gap-5 mt-3">
                  <div className="flex text-green">
                    <IoIosStar size={20} />
                    <IoIosStar size={20} />
                    <IoIosStar size={20} />
                    <IoIosStarHalf size={20} />
                    <IoIosStarOutline size={20} />
                  </div>
                  <Caption>(2 customer reviews)</Caption>
                </div>

                <div className="my-6">
                  <Body>
                    A high-quality product that exceeded my expectations. The craftsmanship is excellent, and the material feels premium. Highly recommended!
                  </Body>
                  <Caption className="text-gray-500">- John Doe</Caption>
                </div>

                <div className="my-6">
                  <Body>
                    The product is good, but it could be more durable. Still, I would purchase again for the design and value.
                  </Body>
                  <Caption className="text-gray-500">- Jane Smith</Caption>
                </div>
              </div>
            )}

            {/* More Products Tab */}
            {activeTab === "moreProducts" && (
              <div className="more-products-tab shadow-s3 p-8 rounded-md bg-white">
                <Title level={4}>More Products</Title>
                <p>Explore more related products in this section.</p>
                {/* Add the content for more products */}
              </div>
            )}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
};
