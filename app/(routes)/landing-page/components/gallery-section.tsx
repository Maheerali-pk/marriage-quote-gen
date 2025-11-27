interface GallerySectionProps {}

const GallerySection: React.FC<GallerySectionProps> = () => {
  return (
    <div className="w-full bg-white overflow-hidden mt-10 sm:mt-16 md:mt-20">
      <div className="max-w-7xl flex flex-col py-10 sm:py-16 md:py-20 mx-auto px-4">
        <div className="text-black text-2xl sm:text-3xl md:text-4xl font-medium">
          Çifte të lumtura, meritojnë
          <br /> fotografi të përjetëshme.
        </div>
        <br />
        <div className="text-black text-base sm:text-lg">
          Galeria ynë me mbi <b>7.6 Milion Shkrepje</b>, e ketu <br className="hidden sm:block" /> gjeni
          disa prej tyre...
          <br></br>
          <br></br>
        </div>
      </div>
      <div className="w-full overflow-x-auto overflow-y-visible" style={{ overflowX: 'auto', overflowY: 'visible' }}>
        <div className="w-[200vw]" style={{ width: '200vw' }}>
          <img
            src="/images/lp/gallery.png"
            alt="gallery"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
