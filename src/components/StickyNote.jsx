import styles from "./StickyNote.module.css";
const StickyNote = ({ setSelectedTab }) => {
  return (
    <div className={styles.stickyNote}>
      <h1 className={styles.head}>Tell us about your own furry friend!</h1>
      <p className={styles.body}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque culpa
        incidunt iure tempore cum autem sed, exercitationem est omnis dolorum
        repellat quam tenetur reiciendis perspiciatis vitae officiis recusandae?
        Veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
        necessitatibus odio repellendus, cupiditate sint ad!
      </p>
      <button
        className={`btn ${styles.button}`}
        onClick={() => setSelectedTab("Create Post")}
      >
        Create a new post
      </button>
      <img src="/paws.png" className={styles.paw} alt="" />
    </div>
  );
};
export default StickyNote;
