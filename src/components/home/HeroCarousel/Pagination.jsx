

export const Pagination = ({slidesInfo, setSlide, currentSlide}) => {
  const goToSlide = (slideIndex) => {
    setSlide(slideIndex)
  }
  

  return (
    <nav className="flex justify-around w-[60px] mb-3">
      {slidesInfo.map((slide, index) => {
        {console.log(index === currentSlide)}
        return (<span
          key={index}
          style={{ backgroundColor: index === currentSlide ? "rgb(80 39 106 / var(--tw-border-opacity))"
              : "rgb(227 219 235 / var(--tw-bg-opacity))"
          }}
          onClick={() => goToSlide(index)}
          className="w-[12px] h-[12px] bg-secondary border border-primary rounded-full cursor-pointer"
        ></span>)
      })}
    </nav>
  );
};
