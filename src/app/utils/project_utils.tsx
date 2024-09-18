export interface ProjectItem {
    title: string;
    duration: string;
    description: string;
    company: string;
    image: string;
    linkAppStore?: string;
    linkPlayStore?: string;
    linkWebsite?: string;
    carouselImages?: string[];
  }


  const projects = [
    {
        title: "Pic - Presenze in cloud",
        duration: "2024",
        description: "App per la gestione delle presenze dei dipendenti in ufficio",
        company: "AshNet",
        image: "/images/pic.png",
        linkAppStore: 'https://apps.apple.com/it/app/pic-presenze-in-cloud/id1580267471',
        linkPlayStore: 'https://play.google.com/store/apps/details?id=it.ashnet.pic.universal&hl=it',
        linkWebsite: undefined,
        carouselImages: undefined,
      },
    {
      title: "Mechit",
      duration: "2023 - oggi",
      description: "Nel corso dell'ultimo anno, ho avuto l'opportunità di sviluppare Mechit...",
      company: "Mechit",
      image: "/images/mechit.png",
      linkAppStore: undefined,
      linkPlayStore: undefined,
      linkWebsite: undefined,
      carouselImages: undefined,
    },
    {
      title: "Municipium",
      duration: "2017 - oggi",
      description: "Come sviluppatore Android, ho avuto il privilegio di lavorare su Municipium...",
      company: "Maggioli SPA",
      image: "/images/municipium.png",
      linkAppStore: 'https://apps.apple.com/it/app/municipium/id720127067',
      linkPlayStore: 'https://play.google.com/store/search?q=municipium&c=apps&hl=it',
      linkWebsite: undefined,
      carouselImages: undefined,
    },
    {
      title: "Ticket Manager",
      duration: "2020 - oggi",
      description: "TicketManager è un'applicazione dedicata alla gestione degli eventi...",
      company: "Vivaticket",
      image: "/images/ticketmanager.png",
      linkAppStore: 'https://apps.apple.com/us/app/lead-generation-app/id6447000962',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.ticketmanager&hl=it',
      linkWebsite: undefined,
      carouselImages: undefined,
    },
    {
      title: "Ticker Coupon",
      duration: "2022 - oggi",
      description: "Questa soluzione innovativa è stata sviluppata per la gestione dei coupon...",
      company: "Vivaticket",
      image: "/images/ticketcoupon.png",
      linkAppStore: 'https://apps.apple.com/dk/app/ticket-coupon/id6475671816',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.vivaticket.coupon_app_vivaticket&hl=it',
      linkWebsite: undefined,
      carouselImages: undefined,
    },
    {
      title: "Private Rental",
      duration: "2023 - oggi",
      description: "Per l'azienda 5bits ho realizzato Private Rental, un'applicazione per la gestione delle proprietà...",
      company: "5bits",
      image: "/images/privaterental.png",
      linkAppStore: 'https://apps.apple.com/bg/app/private-rentals/id6444576957',
      linkPlayStore: undefined,
      linkWebsite: undefined,
      carouselImages: undefined,
    },
  ];
  
  export default projects;
  