/* eslint-disable @typescript-eslint/no-explicit-any */

type MenuItemOptionSetItem = {
    MenuItemOptionSetItemId: number;
    Name: string | null;
    Price: number;
    TaxRateId: null;
    TaxRate: null;
    TaxValue: number;
    IsAvailable: boolean;
    DisplayOrder: number;
    IsDeleted: boolean;
    Tags: any[];
    NextMenuItemOptionSetId: null;
    PublicId: string;
    ImageName: string | null;
    ImageUrl: string | null;
    CellAspectRatio: number;
    CellLayoutType: number;
    OptionSetItemMetadata: any[];
  };
  
  type MenuItemOptionSet = {
    Name: string | null;
    MenuItemOptionSetId: number;
    IsMasterOptionSet: boolean;
    DisplayOrder: number;
    MinSelectCount: number;
    MaxSelectCount: number;
    IsDeleted: boolean;
    PublicId: string;
    MenuItemOptionSetItems: MenuItemOptionSetItem[];
    ImageName: string | null;
    ImageUrl: string | null;
    CellAspectRatio: number;
    CellLayoutType: number;
    MinPrice: number;
    MenuItemId: number;
    MenuItemOptionSetMetadata: any[];
  };
  
  export type MenuItem = {
    MenuItemId: number;
    Name: string;
    Description: string;
    SpicinessRating: number;
    Price: number;
    DisplayOrder: number;
    IsDeleted: boolean;
    Alcohol: boolean;
    Tags: any[];
    PublicId: string;
    IsAvailable: boolean;
    MenuItemOptionSets: MenuItemOptionSet[];
    TaxRate: null;
    TaxRateId: null;
    TaxValue: number;
    MenuSectionId: number;
    ImageName: string | null;
    ImageUrl: string | null;
    CellAspectRatio: number;
    CellLayoutType: number;
    ActualPrice: number;
    DisableVouchers: boolean;
    ExcludeFromVoucherDiscounting: boolean;
    DailySpecialHours: any[];
    PriceCanIncrease: boolean;
    MenuItemMetadata: any[];
  };
  
  export type MenuSection = {
    MenuSectionId: number;
    Name: string;
    Description: string | null;
    DisplayOrder: number;
    MenuItems: MenuItem[];
    PublicId: string;
    IsDeleted: boolean;
    IsAvailable: boolean;
    IsHiddenFromUsers: boolean;
    ImageName: string | null;
    ImageUrl: string | null;
    CellAspectRatio: number;
    CellLayoutType: number;
    MenuSectionAvailability: {
      MenuSectionId: number;
      AvailableTimes:
        | {
            BusinessHoursPeriodId: number;
            DayOfWeek: number;
            StartTime: string;
            Period: string;
            StartTimeEarly: string;
            PeriodEarly: string;
          }[]
        | null;
      AvailabilityMode: number;
    };
    ConcessionStoreId: null;
    MenuSectionMetadata: any[];
  };
  
  export type Menu = {
    MenuId: number;
    MenuVersionNumber: number;
    VersionGuid: string;
    MenuSections: MenuSection[];
    MenuSectionBehaviour: number;
    DisplaySectionLinks: boolean;
    ConcessionStores: any[];
  };