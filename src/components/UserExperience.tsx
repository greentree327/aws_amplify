import { useState } from 'react';

interface Testimonial {
    name: string;
    position: string;
    company: string;
    quote: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Jordan Mike",
        position: "Project Manager",
        company: "Capricorn Consultancy",
        quote: "AdVantage AI transformed the way we approach automation. Their AI-driven messaging and task-specific chatbot solutions made our processes seamless from day one. Their expertise in automating advertising campaigns on platforms like Meta was exactly what we needed to scale our business efficiently.",
        image: "/images/slide1.jpg"
    },
    // Add more testimonials here
];

function UserExperience() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const previousTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section style={{ 
            padding: "80px 140px",
            background: "#ffffff"
        }}>
            <h2 style={{
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "60px",
                textAlign: "center"
            }}>
                Real happy clients who<br />use our product
            </h2>

            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "60px"
            }}>
                <div style={{
                    width: "400px",
                    height: "400px",
                    overflow: "hidden",
                    borderRadius: "4px"
                }}>
                    <img 
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </div>

                <div style={{
                    flex: 1,
                    position: "relative"
                }}>
                    <div style={{
                        backgroundColor: "#FFE600",
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "24px"
                    }}>
                        "
                    </div>
                    
                    <p style={{
                        fontSize: "24px",
                        marginBottom: "40px",
                        color: "#666"
                    }}>
                        {testimonials[currentIndex].quote}
                    </p>

                    <h3 style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        marginBottom: "8px"
                    }}>
                        {testimonials[currentIndex].name}
                    </h3>
                    
                    <p style={{
                        color: "#666"
                    }}>
                        {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                    </p>

                    <div style={{
                        display: "flex",
                        gap: "16px",
                        marginTop: "32px"
                    }}>
                        <button 
                            onClick={previousTestimonial}
                            style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                                border: "1px solid #000",
                                background: "#000",
                                color: "#fff",
                                cursor: "pointer"
                            }}
                        >
                            ←
                        </button>
                        <button 
                            onClick={nextTestimonial}
                            style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                                border: "1px solid #000",
                                background: "#000",
                                color: "#fff",
                                cursor: "pointer"
                            }}
                        >
                            →
                        </button>
                    </div>

                    <div style={{
                        display: "flex",
                        gap: "8px",
                        marginTop: "24px"
                    }}>
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                style={{
                                    width: "32px",
                                    height: "4px",
                                    backgroundColor: index === currentIndex ? "#000" : "#ddd",
                                    transition: "background-color 0.3s ease"
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserExperience;