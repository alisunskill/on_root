// pages/Recommendations.js
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchRecommendations } from "../../../store/actions/recommendationActions";
import styles from "../../../styles/home.module.css";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const RecommendationGrid = ({
  recommendations,
  loading,
  error,
  fetchRecommendations,
}) => {
  useEffect(() => {
    fetchRecommendations();
  }, [fetchRecommendations]);

  if (loading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const router = useRouter();
  const recommendationData = recommendations.Recommendations || [];
  const recentRecommendations = recommendationData.slice(-6);

  // const handleLinkClick = (title) => {
  //   router.push(`/eventdetail/${encodeURIComponent(title.replace(/ /g, "-"))}`);
  // };
  const handleLinkClick = (itemId, postTitle) => {
    router.push(
      `/eventdetail/${encodeURIComponent(
        postTitle.replace(/ /g, "-")
      )}?id=${itemId}`
    );
    console.log(itemId, "itemId");
  };

  return (
    <>
      {recommendationData.length > 0 ? (
        <>
          {recommendationData.length > 5 ? (
            <>
              {/* Events Zone */}
              <div className={`container-fluid`}>
                <div className={`row`}>
                  {/* football match */}

                  <div
                    className={`col-lg-4 overflow-hidden ${styles.landingfirstcard}`}
                  >
                    <Link
                      href={`/eventdetail/${encodeURIComponent(
                        recentRecommendations[1].title.replace(/ /g, "-")
                      )}?id=${recentRecommendations[1]._id}`}
                      className={`text-decoration-none ${styles.inneranimate}`}
                    >
                      <div
                        className={styles.landingimage1}
                        style={{
                          backgroundImage: `url(${recentRecommendations[1]?.images[0]})`,
                        }}
                      >
                        <div className={`col-lg-12 ${styles.landingtext}`}>
                          <p
                            className={`mb-0 letter-spac ${styles.letterspac}`}
                          >
                            EVENT
                          </p>
                          <p
                            className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                          >
                            {recentRecommendations[1].title}
                          </p>
                          <p className={`mb-0 m1`}>
                            {recentRecommendations[1].region}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  {/* 2tour */}
                  <div className={`col-lg-5`}>
                    <div className={`row`}>
                      <div
                        className={`col-lg-12 overflow-hidden ${styles.luxuryrow}`}
                      >
                        <Link
                          href={`/eventdetail/${encodeURIComponent(
                            recentRecommendations[0].title.replace(/ /g, "-")
                          )}?id=${recentRecommendations[0]._id}`}
                          className={`text-decoration-none overflow-hidden d-flex ${styles.animateimg}`}
                        >
                          <div
                            className={`${styles.landingimage2} d-flex align-center light-dark`}
                            style={{
                              backgroundImage: `url(${recentRecommendations[0]?.images[0]})`,
                            }}
                          >
                            <div
                              className={`col-lg-12 ${styles.landingtextmidgrid}`}
                            >
                              <p
                                className={`mb-0 letter-spac ${styles.letterspac}`}
                              >
                                EVENT
                              </p>
                              <p
                                className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                              >
                                {recentRecommendations[0].title}
                              </p>
                              <p className={`mb-0`}>
                                {recentRecommendations[0].region}
                              </p>
                            </div>
                          </div>
                        </Link>

                        <Link
                          href={`/eventdetail/${encodeURIComponent(
                            recentRecommendations[2].title.replace(/ /g, "-")
                          )}?id=${recentRecommendations[2]._id}`}
                          className={`text-decoration-none overflow-hidden my-4 d-flex ${styles.animateimg}`}
                        >
                          <div
                            className={`${styles.landingimage2} d-flex align-center light-dark`}
                            style={{
                              backgroundImage: `url(${recentRecommendations[2]?.images[0]})`,
                            }}
                          >
                            <div
                              className={`col-lg-12 ${styles.landingtextmidgrid}`}
                            >
                              <p
                                className={`mb-0 letter-spac ${styles.letterspac}`}
                              >
                                EVENT
                              </p>
                              <p
                                className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                              >
                                {recentRecommendations[2].title}
                              </p>
                              <p className={`mb-0`}>
                                {recentRecommendations[2].region}
                              </p>
                            </div>
                          </div>
                        </Link>
                        <Link
                          href={`/eventdetail/${encodeURIComponent(
                            recentRecommendations[3].title.replace(/ /g, "-")
                          )}?id=${recentRecommendations[3]._id}`}
                          className={`text-decoration-none overflow-hidden my-4 d-flex ${styles.animateimg}`}
                        >
                          <div
                            className={`${styles.landingimage2} d-flex align-center light-dark`}
                            style={{
                              backgroundImage: `url(${recentRecommendations[3]?.images[0]})`,
                            }}
                          >
                            <div
                              className={`col-lg-12 ${styles.landingtextmidgrid}`}
                            >
                              <p
                                className={`mb-0 letter-spac ${styles.letterspac}`}
                              >
                                EVENT
                              </p>
                              <p
                                className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                              >
                                {recentRecommendations[3].title}
                              </p>
                              <p className={`mb-0`}>
                                {recentRecommendations[3].region}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* 3rd tour */}
                  <div className={`col-lg-3`}>
                    <div className={`row`}>
                      <Link
                        href={`/eventdetail/${encodeURIComponent(
                          recentRecommendations[4].title.replace(/ /g, "-")
                        )}?id=${recentRecommendations[4]._id}`}
                        className={`text-decoration-none overflow-hidden m-0 p-0 d-flex ${styles.animateimg}`}
                      >
                        <div className={`col-lg-12 p-0`}>
                          <div
                            className={`${styles.landingimage5} d-flex align-center p-0 m-0`}
                            style={{
                              backgroundImage: `url(${recentRecommendations[4]?.images[0]})`,
                            }}
                          >
                            <div
                              className={`col-lg-12 ${styles.landingtextmidgrid}`}
                            >
                              <p
                                className={`mb-0 letter-spac ${styles.letterspac}`}
                              >
                                EVENT
                              </p>
                              <p
                                className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                              >
                                {recentRecommendations[4].title}
                              </p>
                              <p className={`mb-0 m1`}>
                                {recentRecommendations[4].region}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href={`/eventdetail/${encodeURIComponent(
                          recentRecommendations[5].title.replace(/ /g, "-")
                        )}?id=${recentRecommendations[5]._id}`}
                        className={`text-decoration-none overflow-hidden my-4 p-0 d-flex ${styles.animateimg}`}
                      >
                        <div
                          className={`${styles.landingimage6}  d-flex align-center  m-0`}
                          style={{
                            backgroundImage: `url(${recentRecommendations[5]?.images[0]})`,
                          }}
                        >
                          <div
                            className={`col-lg-12 ${styles.landingtextinalgrid}`}
                          >
                            <p
                              className={`mb-0 letter-spac ${styles.letterspac}`}
                            >
                              EVENT
                            </p>
                            <p
                              className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                            >
                              {recentRecommendations[5].title}
                            </p>
                            <p className={`mb-0 m1`}>
                              {recentRecommendations[5].region}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Events Zone */}
              <div className={`container-fluid`}>
                <div className={`row`}>
                  {/* football match */}

                  {/* 2tour */}
                  <div className={`col-lg-12`}>
                    <div className={`row`}>
                      <div
                        className={`col-lg-12  ${styles.luxuryrow} d-flex align-items-center`}
                      >
                        {recentRecommendations.map((recommendation) => (
                          <Link
                            key={recommendation.id}
                            onClick={() =>
                              handleLinkClick(recentRecommendations[6]._id)
                            }
                            href={`/eventdetail/${encodeURIComponent(
                              recentRecommendations[6]?.title.replace(/ /g, "-")
                            )}`}
                            className="text-decoration-none"
                          >
                            <div
                              className={`${styles.landingimage2} d-flex align-center light-dark`}
                            >
                              <div
                                className={`col-lg-12 ${styles.landingtextmidgrid}`}
                              >
                                <p
                                  className={`mb-0 letter-spac ${styles.letterspac}`}
                                >
                                  EVENT
                                </p>
                                <p
                                  className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                                >
                                  {recommendation.title}
                                </p>
                                <p className={`mb-0`}>Paris, France</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <p>No recommendations available.</p>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  recommendations: state.recommendation.recommendations,
  loading: state.recommendation.loading,
  error: state.recommendation.error,
});

const mapDispatchToProps = {
  fetchRecommendations,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationGrid);
