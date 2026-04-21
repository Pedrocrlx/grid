"use client";

import { useMemo, useState } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { DashboardManagementLayout } from "../_components/DashboardManagementLayout";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBarbersPage } from "./_hooks/useBarbersPage";
import { COUNTRY_CONFIGS } from "@/lib/utils/phone-validation";

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function EditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function BarbersPage() {
  const { t } = useI18n();
  const {
    barbers,
    isLoading,
    isDrawerOpen,
    isSubmitting,
    isUploading,
    selectedCountry,
    fileInputRef,
    editingId,
    formData,
    setIsDrawerOpen,
    setSelectedCountry,
    setFormData,
    handleOpenAdd,
    handleOpenEdit,
    handleImageUpload,
    handleSubmit,
    handleDelete,
    getInitials,
  } = useBarbersPage();
  const [search, setSearch] = useState("");

  const filteredBarbers = useMemo(() => {
    const searchQuery = search.trim().toLowerCase();
    if (!searchQuery) return barbers;

    return barbers.filter((barber) => {
      const haystack = [barber.name, barber.description ?? "", barber.phone ?? "", barber.instagram ?? ""]
        .join(" ")
        .toLowerCase();

      return haystack.includes(searchQuery);
    });
  }, [barbers, search]);

  const selectedCountryConfig = COUNTRY_CONFIGS[selectedCountry];
  const selectBaseClass =
    "w-full h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all font-medium appearance-none";

  return (
    <DashboardManagementLayout
      title={t.dashboard.barbers?.title || "Barbers"}
      subtitle={t.dashboard.barbers?.subtitle || "Manage your barbershop team"}
    >
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              {barbers.length} / 10 {t.dashboard.barbers.counter}
            </h2>
          </div>

          <div className="flex w-full gap-3 sm:w-auto">
            <div className="relative flex-1 sm:w-72">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={"Search by name, phone or Instagram"}
                className="h-11 rounded-xl pl-9"
              />
            </div>
            <Button
              onClick={handleOpenAdd}
              disabled={barbers.length >= 10}
              className="h-11 gap-2 rounded-xl font-bold"
            >
              <PlusIcon className="h-4 w-4" />
              {t.dashboard.barbers.addButton}
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((skeleton) => (
              <div
                key={skeleton}
                className="h-56 animate-pulse rounded-2xl border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40"
              />
            ))}
          </div>
        ) : filteredBarbers.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 py-20 text-center dark:border-slate-800 dark:bg-slate-900/40">
            <p className="mb-4 font-medium text-slate-500">
              {barbers.length === 0 ? t.dashboard.barbers.noBarbers : "No barbers match your search."}
            </p>
            {barbers.length === 0 ? (
              <Button variant="outline" onClick={handleOpenAdd} className="rounded-xl font-bold">
                {t.dashboard.barbers.createFirst}
              </Button>
            ) : null}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {filteredBarbers.map((barber) => (
              <div
                key={barber.id}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex min-w-0 items-center gap-3">
                    {barber.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={barber.imageUrl} alt={barber.name} className="h-12 w-12 rounded-full object-cover" />
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {getInitials(barber.name) || "--"}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className="truncate text-xl font-bold text-slate-900 dark:text-slate-50">{barber.name}</h3>
                      <p className="truncate text-xs text-slate-500 dark:text-slate-400">{barber.phone || "—"}</p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    <button
                      onClick={() => handleOpenEdit(barber)}
                      className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20"
                      title={t.dashboard.common.edit}
                    >
                      <EditIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(barber.id)}
                      className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20"
                      title={t.dashboard.common.delete}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <p className="mb-4 line-clamp-2 h-10 text-sm text-slate-500 dark:text-slate-400">
                  {barber.description || t.dashboard.barbers.descriptionPlaceholder}
                </p>

                {barber.instagram ? (
                  <p className="truncate rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {barber.instagram}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="mx-auto sm:max-w-md">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-black">
              {editingId ? t.dashboard.barbers.formTitleEdit : t.dashboard.barbers.formTitleNew}
            </DrawerTitle>
            <DrawerDescription className="font-medium">
              {editingId ? t.dashboard.barbers.formDescEdit : t.dashboard.barbers.formDescNew}
            </DrawerDescription>
          </DrawerHeader>

          <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
            <div className="space-y-5 overflow-y-auto px-6 pb-4 pt-0">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.dashboard.barbers.name}</label>
                <Input
                  placeholder={t.dashboard.barbers.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-11 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.dashboard.barbers.description}</label>
                <Input
                  placeholder={t.dashboard.barbers.descriptionPlaceholder}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="h-11 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.dashboard.barbers.phone}</label>
                <div className="grid grid-cols-12 gap-2">
                  <div className="relative col-span-4">
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className={selectBaseClass}
                    >
                      {Object.entries(COUNTRY_CONFIGS).map(([code, config]) => (
                        <option key={code} value={code}>
                          {config.code} {config.dialCode}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-8">
                    <Input
                      placeholder={selectedCountryConfig?.placeholder || t.dashboard.barbers.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-11 rounded-xl"
                      maxLength={selectedCountryConfig?.maxLength || 15}
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t.dashboard.barbers.example}: {selectedCountryConfig?.dialCode}
                  {selectedCountryConfig?.placeholder}
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.dashboard.barbers.instagram}</label>
                <Input
                  placeholder={t.dashboard.barbers.instagramPlaceholder}
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  className="h-11 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.dashboard.barbers.photo}</label>

                <div className="flex items-center gap-3 rounded-xl border border-dashed border-slate-300 p-3 dark:border-slate-700">
                  {formData.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={formData.imageUrl}
                      alt={t.dashboard.barbers.photoPreviewAlt}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                      {t.dashboard.common.noPhoto}
                    </div>
                  )}

                  <div className="flex-1">
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.dashboard.common.maxSize}</p>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isUploading}
                      className="mt-2 h-9 rounded-lg"
                    >
                      {isUploading
                        ? t.dashboard.common.uploadingImage
                        : formData.imageUrl
                        ? t.dashboard.common.changePhoto
                        : t.dashboard.common.uploadPhoto}
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>

            <DrawerFooter className="px-6 pb-6 pt-4">
              <Button type="submit" disabled={isSubmitting || isUploading} className="h-12 w-full rounded-xl text-base font-bold">
                {isSubmitting
                  ? t.dashboard.barbers.processing
                  : editingId
                  ? t.dashboard.barbers.saveChanges
                  : t.dashboard.barbers.createBarber}
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" className="h-12 w-full rounded-xl font-bold">
                  {t.dashboard.barbers.cancel}
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </DashboardManagementLayout>
  );
}
