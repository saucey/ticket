export interface TKT {
  MinPaxPerTck: string;
  MinAdtPerTck: string;
  TravelCardsApplied: string;
  ChdPrice: string;
  MinChdPerTck: string;
  CanTicketOnDeparture: string;
  Operator: string;
  AdtPrice: string;
  MaxAdtPerTck: string;
  TravelCardDiscAdt: string;
  TravelTimes: string;
  MaxPaxPerTck: string;
  MaxChdPerTck: string;
  ValidTo: string;
  ProfileShouldNotBook: string;
  TicketDescription: string;
  ValidFrom: string;
  SingleOrReturn: string;
  TicketCode: string;
  TravelCardDiscChd: string;
  ForRouteLEGTicket: string;
}

export interface Leg {
  LegDirection: string;
  ArrStnFull: string;
  DepStnFull: string;
  RouteTransport: string;
  Operator: string;
  DepStn: string;
  DepDate: string;
  LegCo2: string;
  SeatsReservable: string;
  RouteBookingCode: string;
  ArrStn: string;
  ClassesAvailForLeg: string;
  sTrnUltimateDest: string;
  ArrTime: string;
  LegDistance: string;
  TKTs: TKT[];
  SeatsSelected: string;
  RouteName: string;
  NumberOfStops: string;
  sTrnStartingPoint: string;
  DepTime: string;
}

export interface TrainRoot {
  ReturnUid: string;
  Infants: string;
  Co2Produced: string;
  Children: string;
  ArrGateWay: string;
  Format: string;
  MinChildPrice: string;
  DateStored: string;
  DepDate: string;
  RecNum: string;
  Source: string;
  DiscountID: string;
  ReturnArrDate: string;
  BookingPolicy: string;
  OutBoundUid: string;
  Icons: string;
  BookingReason: string;
  MaxClass: string;
  BookingPolicyDesc: string;
  BeforeAfterAt: string;
  ScanDate: string;
  DepStationCode: string;
  DiscountRule: string;
  BookingRef: string;
  Currency: string;
  DepGateWay: string;
  OperatorPri: number;
  DiscountBKG: string;
  ScanTime: string;
  Split: string;
  Supplier: string;
  DiscountVoucherCodesApplied: string;
  DistanceTravelled: string;
  DepTime: string;
  OutBoundLegs: string;
  ReturnLegs: string;
  ExtraTimeToChange: string;
  DepStationCodeFull: string;
  RequestType: string;
  ErrorStatus: string;
  Operator: string;
  Legs: Leg[];
  DiscountCHD: string;
  Adults: string;
  TotalStops: string;
  ReturnDepTime: string;
  ReturnArrTime: string;
  DiscountADT: string;
  Via: string;
  ArrTime: string;
  ArrStationCodeFull: string;
  apiRecNum: string;
  ArrStationCode: string;
  MinAdultPrice: string;
  UserRef: string;
  ArrDate: string;
  RecType: string;
  SingleOrReturn: string;
  ReturnDepDate: string;
  DiscountGRP: string;
}