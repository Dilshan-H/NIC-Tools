import "./Blocks.scss";

const Blocks = () => {
  return (
    <div className="Blocks">
      <div className="content-box" data-aos="slide-up" data-aos-delay="100">
        <div className="box">
          <span class="icon-text">
            <span class="icon has-text-success is-large">
              <ion-icon name="finger-print" size="large"></ion-icon>
            </span>
            <span>
              <h2 class="subtitle">
                <strong>Privacy</strong>
              </h2>
            </span>
          </span>
          <p>
            This is a Free &amp; Open Source utility. Your data never leaves
            your computer as data processing happens within your browser. <br />
            Not sure? Review the source code @GitHub
          </p>
        </div>
      </div>

      <div className="content-box" data-aos="slide-up" data-aos-delay="300">
        <div className="box">
          <span class="icon-text">
            <span class="icon has-text-success is-large">
              <ion-icon
                name="information-circle-outline"
                size="large"
              ></ion-icon>
            </span>
            <span>
              <h2 class="subtitle">
                <strong>NIC Information</strong>
              </h2>
            </span>
          </span>
          <p>
            Unveil the hidden data within a NIC number! Using this tool, you can
            find the NIC type, Gender, Birthday, Age and the Province of the ID
            card holder. Additionally, you can validate (partially) the ID
            numbers too.
          </p>
        </div>
      </div>

      <div className="content-box" data-aos="slide-up" data-aos-delay="500">
        <div className="box">
          <span class="icon-text">
            <span class="icon has-text-success is-large">
              <ion-icon name="construct" size="large"></ion-icon>
            </span>
            <span>
              <h2 class="subtitle">
                <strong>Generate NIC</strong>
              </h2>
            </span>
          </span>
          <p>
            Using this tool, you can generate a valid (partially) NIC number by
            providing the birthday and the gender of a person. This comes in
            handy if you need to find the starting digits of a NIC number.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blocks;
