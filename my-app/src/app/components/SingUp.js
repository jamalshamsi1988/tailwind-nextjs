import Link from "next/link";

const SingUp = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
      <div className="border-2 w-10 border-white inline-block mb-2"></div>
      <p className="mb-10">
        Fill up personal information and start joureny with us.
      </p>
      <Link
        href="#"
        className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white  hover:text-gray-900"
      >
        Sing up
      </Link>
    </>
  );
};

export default SingUp;
