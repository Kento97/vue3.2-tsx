import type TestComRef from "@/components/TestComRef";
type tellMeYourNameType = {
    tellMeYourName: () => void;
};
type ComRefType = InstanceType<typeof TestComRef> & tellMeYourNameType;

export type { ComRefType }