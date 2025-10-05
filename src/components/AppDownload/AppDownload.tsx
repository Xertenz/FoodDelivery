import { assets } from "../../assets/assets";

export default function AppDownload() {
  return (
    <section className="app-download text-center mx-auto pb-18">
      <div className="container mx-auto">
        <p className="capitalize text-2xl font-bold mb-3">
          for better experience download <br /> tomato app
        </p>
        <div className="app-download-platforms inline-flex gap-4">
          <img src={assets.play_store} alt="Play Store" className="hover:scale-110 transition-transform cursor-pointer" />
          <img src={assets.app_store} alt="App Store" className="hover:scale-110 transition-transform cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
