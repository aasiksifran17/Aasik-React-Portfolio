import Card from "./Card";

const ServicesInfo = () => {
  return (
    <div className="px-5 md:px-20 py-20 bg-secondary-font-color" id="services">
      <h4
        className="text-3xl text-center md:text-left font-semibold text-primary-blue mb-5"
        data-aos="flip-up"
        data-aos-duration="2000"
      >
        Services
      </h4>

      {/* Services */}
      <div className="sm:flex justify-center sm:gap-5 items-center">
        {/* Front-end Development */}
        <Card
          heading="Frontend Development"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 14 14"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-8A.5.5 0 0 0 13 2m-7 9l-1 2.5M8 11l1 2.5m-5 0h6" />
                <path d="m4.5 5.25l-1.75 1.5L4.25 8m5.5-2.5l1.5 1.25l-1.75 1.5m-3.25.5l1.5-4.5" />
              </g>
            </svg>
          }
          navigate="/tasks"
        />

        {/* Backend Development */}
        <Card
          heading="Backend Development"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 32 32"
            >
              <path
                fill="#c4c7ce"
                d="M8.562 15.256A21.159 21.159 0 0 0 16 16.449a21.159 21.159 0 0 0 7.438-1.194c1.864-.727 2.525-1.535 2.525-2V9.7a10.357 10.357 0 0 1-2.084 1.076A22.293 22.293 0 0 1 16 12.078a22.36 22.36 0 0 1-7.879-1.3A10.28 10.28 0 0 1 6.037 9.7v3.55c0 .474.663 1.278 2.525 2.006m0 6.705a15.611 15.611 0 0 0 2.6.741a24.9 24.9 0 0 0 4.838.453a24.9 24.9 0 0 0 4.838-.452a15.614 15.614 0 0 0 2.6-.741c1.864-.727 2.525-1.535 2.525-2v-3.39a10.706 10.706 0 0 1-1.692.825A23.49 23.49 0 0 1 16 18.74a23.49 23.49 0 0 1-8.271-1.348a10.829 10.829 0 0 1-1.692-.825v3.393c0 .466.663 1.271 2.525 2.001M16 30c5.5 0 9.963-1.744 9.963-3.894v-2.837a10.5 10.5 0 0 1-1.535.762l-.157.063A23.487 23.487 0 0 1 16 25.445a23.422 23.422 0 0 1-8.271-1.351c-.054-.02-.106-.043-.157-.063a10.5 10.5 0 0 1-1.535-.762v2.837C6.037 28.256 10.5 30 16 30"
              />
              <ellipse
                cx="16"
                cy="5.894"
                fill="#c4c7ce"
                rx="9.963"
                ry="3.894"
              />
            </svg>
          }
          navigate="/coming"
        />

        {/* Custom Website Development */}
        <Card
          heading="Custom Website Development"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
              />
            </svg>
          }
          navigate={"/fghfi"}
        />

        {/* Web Application Development */}
        <Card
          heading="Web Application Development"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
              />
            </svg>
          }
          navigate={"/fdgh"}
        />
      </div>
    </div>
  );
};

export default ServicesInfo;
