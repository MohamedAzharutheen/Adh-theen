import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/component/layout";

const Chrono = dynamic(() => import("react-chrono").then((mod) => mod.Chrono), {
  ssr: false,
});

const ZigzagTimeline = () => {
  const items = [
    {
      title: "01",
      cardTitle: "Ihram",
      cardSubtitle: "Before entering the sacred state, pilgrims don the Ihram clothing, which consists of two white, unstitched garments for men and a simple dress for women. This attire symbolizes purity, equality, and the unity of all Muslims. Pilgrims recite the Talbiyah, expressing their readiness to respond to Allah’s call. This phase marks the start of their spiritual journey.",
      media: {
        name: "Step 1 Image",
        source: {
          url: "/assets/images/guide/ihram-.svg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "02",
      cardTitle: "Tawaf",
      cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
      media: {
        name: "Step 2 Image",
        source: {
          url: "/assets/images/guide/ihram-.svg",
        },
        type: "IMAGE",
      },
    },
    {
        title: "03",
        cardTitle: "Sa’i: Walking Between Safa and Marwah",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/ihram-.svg",
          },
          type: "IMAGE",
        },
      },
      {
        title: "04",
        cardTitle: "Mina (the Day of Tarwiya)",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/ihram-.svg",
          },
          type: "IMAGE",
        },
      },
      {
        title: "05",
        cardTitle: "Arafah (Day of the Greater Hajj)",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/ihram-.svg",
          },
          type: "IMAGE",
        },
      },
      {
        title: "06",
        cardTitle: "Muzdalifah",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/ihram-.svg",
          },
          type: "IMAGE",
        },
      },
      {
        title: "07",
        cardTitle: "Pelt Jamrat Al-Aqabah",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/ihram-.svg",
          },
          type: "IMAGE",
        },
      },
      {
        title: "08",
        cardTitle: "Adhahi ",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/ihram-.svg",
          },
          type: "IMAGE",
        },
      },
      {
        title: "09",
        cardTitle: "Shave Hair or Trim",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/ihram-.svg",
          },
          type: "IMAGE",
        },
      },
      {
        title: "10",
        cardTitle: "Tawaf Al-Ifada",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/ihram-.svg",
          },
          type: "IMAGE",
        },
      },
      {
        title: "11",
        cardTitle: "Pelting the three Jamarat",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/ihram-.svg",
          },
          type: "IMAGE",
        },
      },
      {
        title: "12",
        cardTitle: "Tawaf Al-Wadaa",
        cardSubtitle: "Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.",
        media: {
          name: "Step 2 Image",
          source: {
            url: "/assets/images/guide/ihram-.svg",
          },
          type: "IMAGE",
        },
      },
  ];

  return (
    <>
    <Layout>
      <div className="row mt-5">
        <div className="col-lg-12 col-md-12 col-sm-12">
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      theme={{
        primary: "#0f4c81",
        secondary: "#f5f5f5",
        cardBgColor: "#ffffff",
        cardForeColor: "#0f4c81",
      }}
      cardHeight={200}
      cardWidth={300}
    />
    </div>
    </div>
    </Layout>
<style jsx>
    {`
    .jSOuST {
    color: #000;
    font-size: 19px !important;
    font-weight: 600;
    margin: 0;
    text-align: left;
    width: 97%;
    padding: 0.5rem 0 0.5rem 0.5rem;
    }
    `}
</style>
</>
  );
};

export default ZigzagTimeline;
