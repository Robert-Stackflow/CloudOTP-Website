/**
 * TOC footer component with sponsor card and carbon ads for desktop sidebar
 */
export function TocFooter() {
  return (
    <div className="flex flex-col gap-3 mt-2 mb-2">
      {/* <DocsSponsorCard /> */}
      {/* <DocsCarbonAdCard /> */}
    </div>
  );
}

/**
 * TOC footer component with only sponsor card for mobile popover
 */
export function TocFooterMobile() {
  return (
    <div className="flex flex-col gap-3 mt-2 mb-2">
      {/* <DocsSponsorCard /> */}
    </div>
  );
}
