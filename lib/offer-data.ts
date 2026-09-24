/* ============================================================
   FYP Desk — Offer data
   Edit `spotsTaken` only. 0..5. Commit + push — the page updates.
   ============================================================ */

export const OFFER_DATA = {
  totalSpots: 5,
  spotsTaken: 0,        // ← edit this number (0 = none taken, 5 = all taken)
  offerPrice: "20,000",
  standardPrice: "30,000",
};

export type OfferStatus = {
  left: number;
  over: boolean;
  /** null when the offer is over */
  line: { spots: string | null; rest: string } | null;
};
