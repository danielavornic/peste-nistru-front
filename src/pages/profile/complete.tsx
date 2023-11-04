import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { MultiSelect, useMultiSelect } from "chakra-multiselect";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useAuth } from "@/hooks";
import { Layout } from "@/components";
import { useRouter } from "next/router";

const defaultInterests = [
  "Muzică",
  "Sport",
  "Artă",
  "Filme",
  "Cărți",
  "Gastronomie",
  "Istorie",
  "Tehnologie",
  "Educație",
  "Mediu",
  "Călătorii",
  "Fotografie",
  "Modă",
  "Poezie",
  "Știință",
  "Sănătate",
  "Sustenabilitate",
  "Dans",
  "Teatru",
  "Voluntariat",
];

const defaultRegions = [
  "mun. Chişinău",
  "mun. Bălţi",
  "mun. Bender",
  "r-n Anenii Noi",
  "r-n Basarabeasca",
  "r-n Briceni",
  "r-n Cahul",
  "r-n Cantemir",
  "r-n Călăraşi",
  "r-n Căuşeni",
  "r-n Cimişlia",
  "r-n Criuleni",
  "r-n Donduşeni",
  "r-n Drochia",
  "r-n Dubăsari",
  "r-n Edineţ",
  "r-n Făleşti",
  "r-n Floreşti",
  "r-n Glodeni",
  "r-n Hînceşti",
  "r-n Ialoveni",
  "r-n Leova",
  "r-n Nisporeni",
  "r-n Ocniţa",
  "r-n Orhei",
  "r-n Rezina",
  "r-n Rîşcani",
  "r-n Sîngerei",
  "r-n Soroca",
  "r-n Străşeni",
  "r-n Şoldăneşti",
  "r-n Ştefan Vodă",
  "r-n Taraclia",
  "r-n Teleneşti",
  "r-n Ungheni",
  "UTA Găgăuzia",
  "mun. Comrat",
  "mun. Tiraspol",
  "UAT din Stînga Nistrului",
];

const CompleteProfile = () => {
  const t = useTranslations("profile");
  const { user, setUser } = useAuth();
  const { push } = useRouter();

  const defaultValues = {
    name: user?.name,
    surname: user?.surname,
    birthDate: user?.birthDate,
    interests: user?.interests,
    region: user?.region,
  };

  const [date, setDate] = useState(defaultValues.birthDate);
  const [terms, setTerms] = useState(false);
  const [region, setRegion] = useState(defaultValues.region);
  const { value, options, onChange } = useMultiSelect({
    value: defaultValues.interests,
    options: defaultInterests,
  });
  const { register, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues,
  });

  const onSubmit = (data: any) => {
    setUser({ ...user, ...data, interests: value.map((item: any) => item.value) });
    push("/");
  };

  return (
    <Layout title={t("completeProfile")}>
      <Stack align="stretch" spacing={4}>
        <VStack mb={12} spacing={6}>
          <Heading as="h1" fontSize="4xl" textAlign="center">
            {t("completeProfile")}
          </Heading>
          <Text color="gray.800" fontSize="lg" textAlign="center">
            {t("completeProfileDescription")}
          </Text>
        </VStack>

        <VStack
          as="form"
          maxWidth="700px"
          w="full"
          spacing={6}
          mx="auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <HStack w="full" spacing={6}>
            <FormControl id="name">
              <FormLabel>{t("name")}</FormLabel>
              <Input
                type="text"
                placeholder={t("name")}
                {...register("name", {
                  required: t("required"),
                })}
              />
            </FormControl>

            <FormControl id="surname">
              <FormLabel>{t("surname")}</FormLabel>
              <Input
                type="text"
                placeholder={t("surname")}
                {...register("surname", {
                  required: t("required"),
                })}
              />
            </FormControl>
          </HStack>
          <FormControl id="birthDate" isDisabled>
            <FormLabel>{t("birthDate")}</FormLabel>
            <SingleDatepicker
              name="birthDate"
              date={date}
              onDateChange={setDate}
              propsConfigs={{
                dayOfMonthBtnProps: {
                  selectedBtnProps: {
                    background: "brand.500",
                    color: "white",
                  },
                },
              }}
            />
          </FormControl>

          <FormControl id="region" isDisabled>
            <FormLabel>{t("region")}</FormLabel>
            <MultiSelect
              id="region"
              options={defaultRegions.map((region) => ({ label: region, value: region }))}
              value={region}
              onChange={setRegion}
              single
            />
          </FormControl>

          <FormControl id="interests">
            <MultiSelect
              options={options}
              value={value}
              label={t("interests")}
              onChange={onChange}
              colorScheme="brand"
              props={{
                button: {
                  background: "white",
                  color: "gray.800",
                  borderColor: "gray.200",
                },
              }}
            />
          </FormControl>

          <Checkbox colorScheme="brand" isChecked={terms} onChange={() => setTerms(!terms)}>
            {t("agree")}{" "}
            <Text as="span" color="brand.500" fontWeight={600}>
              {t("terms")}
            </Text>
          </Checkbox>

          <Button
            type="submit"
            colorScheme="brand"
            size="lg"
            w="full"
            isDisabled={!date || !value?.length || !terms}
          >
            {t("save")}
          </Button>
        </VStack>
      </Stack>
    </Layout>
  );
};

export default CompleteProfile;
