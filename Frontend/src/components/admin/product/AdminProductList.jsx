import { Title } from "../../../routes";
import { Table } from "../../common/Hero/Table";

export const AdminProductList = () => {
  return (
    <>
      <section className="shadow-s1 p-8 rounded-lg">
        <div className="flex justify-between">
          <Title level={5} className=" font-normal">
            Product Lists
          </Title>
        </div>
        <hr className="my-5" />
        <Table />
      </section>
    </>
  );
};
