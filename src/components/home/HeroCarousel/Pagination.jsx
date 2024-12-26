

export const Pagination = ({slidesInfo, setSlide, currentSlide}) => {
  const goToSlide = (slideIndex) => {
    setSlide(slideIndex)
  }
  

  return (
    <nav className="hidden tablet:flex justify-around w-[60px] mb-3 tablet:absolute bottom-3">
      {slidesInfo.map((slide, index) => {
        return (<span
          key={index}
          style={{ backgroundColor: index === currentSlide ? "rgb(80 39 106 / var(--tw-border-opacity))"
              : "rgb(227 219 235 / var(--tw-bg-opacity))"
          }}
          onClick={() => goToSlide(index)}
          className="laptop:w-[12px] laptop:h-[12px] bg-secondary border border-primary rounded-full cursor-pointer w-[6px] h-[6px]"
        ></span>)
      })}
    </nav>
  );
};
