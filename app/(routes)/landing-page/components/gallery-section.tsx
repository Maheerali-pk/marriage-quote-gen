interface GallerySectionProps {}

const GallerySection: React.FC<GallerySectionProps> = () => {
  return (
    <div className="w-full bg-white overflow-hidden mt-20">
      <div className="max-w-7xl flex flex-col py-20 mx-auto px-4">
        <div className="text-black text-4xl font-medium ">
          Çifte të lumtura, meritojnë
          <br /> fotografi të përjetëshme.
        </div>
        <br />
        <div className="text-black text-lg">
          Galeria ynë me mbi <b>7.6 Milion Shkrepje</b>, e ketu <br /> gjeni
          disa prej tyre...
          <br></br>
          <br></br>
        </div>
        <img
          src="/images/lp/gallery.png"
          alt="gallery"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default GallerySection;
