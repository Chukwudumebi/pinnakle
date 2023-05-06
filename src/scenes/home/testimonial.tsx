import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const TestimonialsContainer = styled.div`
  .testimonial-card .card-up {
    height: 120px;
    overflow: hidden;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  margin: 1rem;
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: auto;
`;

const TestimonialName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TestimonialStatement = styled.p`
  font-size: 1.25rem;
`;

const TestimonialSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  & > * {
    margin: 0 0.5rem;
    font-size: 1.5rem;
    color: #333;

    &:hover {
      color: #00acee;
    }
  }
`;

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      statement:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin euismod mauris, nec luctus urna rutrum a.",
      image: "/images/john-doe.jpg",
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Jane Smith",
      statement:
        "Pellentesque vel elementum mauris. Aliquam id tortor eget sapien tincidunt vulputate eget eu mauris.",
      image: "/images/jane-smith.jpg",
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  ];

  return (
    <TestimonialsContainer>
      <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name}>
            <TestimonialCard>
              <TestimonialImage
                src={testimonial.image}
                alt={testimonial.name}
              />
              <TestimonialName>{testimonial.name}</TestimonialName>
              <TestimonialStatement>
                {testimonial.statement}
              </TestimonialStatement>
              <TestimonialSocialIcons>
                <a href={testimonial.twitter}>
                  <FaTwitter />
                </a>
                <a href={testimonial.linkedin}>
                  <FaLinkedin />
                </a>
              </TestimonialSocialIcons>
            </TestimonialCard>
          </div>
        ))}
      </Carousel>
    </TestimonialsContainer>
  );
};

export default Testimonials;
