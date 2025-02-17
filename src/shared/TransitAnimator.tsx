import React from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface TransitAnimatorProps {
  image: string | null;
}

const TransitAnimator = (props: TransitAnimatorProps) => {
  const { image } = props;

  return (
    <>
      {image ? (
        <motion.div
          className="animator-wrapper"
          initial={{
            y: "200%",
            scale: 2,
          }}
          exit={{
            y: "0%",
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            scale: {
              duration: 1,
            },
          }}
        >
          <Container className="px-xl-5">
            <Row>
              <Col xs={12}>
                <motion.div className="animator-holder">
                  <motion.img className="animator-img" src={image} />
                  <motion.div className="animator-curtains">
                    <motion.div
                      className="animator-curtain"
                      exit={{
                        y: "-100%",
                      }}
                      transition={{
                        delay: 0.5,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    ></motion.div>
                    <motion.div
                      className="animator-curtain"
                      exit={{
                        y: "-100%",
                      }}
                      transition={{
                        delay: 0.3,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    ></motion.div>
                    <motion.div
                      className="animator-curtain"
                      exit={{
                        y: "-100%",
                      }}
                      transition={{
                        delay: 0.1,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    ></motion.div>
                    <motion.div
                      className="animator-curtain"
                      exit={{
                        y: "-100%",
                      }}
                      transition={{
                        delay: 0.3,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    ></motion.div>
                    <motion.div
                      className="animator-curtain"
                      exit={{
                        y: "-100%",
                      }}
                      transition={{
                        delay: 0.5,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    ></motion.div>
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </motion.div>
      ) : (
        <motion.div
          className="animator-wrapper"
        >
          <motion.div 
            className="animator-holder vw-100 vh-100 mt-0"
          >
            <motion.div className="animator-curtains">
              <motion.div
                className="animator-curtain"
                initial={{
                  y:"100%"
                }}
                exit={{
                  y: "0",
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              ></motion.div>
              <motion.div
                className="animator-curtain"
                initial={{
                  y:"100%"
                }}
                exit={{
                  y: "0",
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              ></motion.div>
              <motion.div
                className="animator-curtain"
                initial={{
                  y:"100%"
                }}
                exit={{
                  y: "0",
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              ></motion.div>
              <motion.div
                className="animator-curtain"
                initial={{
                  y:"100%"
                }}
                exit={{
                  y: "0",
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              ></motion.div>
              <motion.div
                className="animator-curtain"
                initial={{
                  y:"100%"
                }}
                exit={{
                  y: "0",
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}


    </>
  );
};

export default TransitAnimator;
