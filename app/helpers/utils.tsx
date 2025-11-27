import { IGlobalState } from "../contexts/GlobalContext";
import {
  allEventGroups,
  allEventItems,
  LOGISTICS_PRICE,
  DECEMBER_DISCOUNT_PERCENTAGE,
} from "./data";
import { emailBackground } from "./email-bg-image";

export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
};

export const getGroupPrice = (state: IGlobalState, groupId: string): number => {
  const group = allEventGroups.find((g) => g.id === groupId);
  if (!group) return 0;

  const groupSelection = state.selections?.find(
    (selection) => selection.eventGroupId === groupId
  );
  if (!groupSelection) return 0;

  const totalForGroup = groupSelection.selectedItems.reduce(
    (sum, selectedItem) => {
      const item = allEventItems.find((i) => i.id === selectedItem.itemId);
      if (!item) return sum;
      return sum + item.price * selectedItem.count;
    },
    0
  );

  return totalForGroup * (1 - group.discountPercentage / 100);
};

export const getTotalPrice = (state: IGlobalState) => {
  const enabledEventGroups = getEnabledEventGroups(state);
  const filteredEventGroups = allEventGroups.filter(
    (group) =>
      enabledEventGroups.find((item) => item.evnetGroupId === group.id)?.enabled
  );
  return filteredEventGroups.reduce((acc, group) => {
    return acc + getGroupPrice(state, group.id);
  }, 0);
};

export const getEnabledEventGroups = (state: IGlobalState) => {
  const res = [
    { evnetGroupId: "0", enabled: false },
    { evnetGroupId: "1", enabled: false },
    { evnetGroupId: "2", enabled: true },
    { evnetGroupId: "3", enabled: false },
  ];
  if (state.brideTradition) {
    res.find((item) => item.evnetGroupId === "0")!.enabled = true;
  }
  if (state.buildingType === "church" || state.buildingType === "mosque") {
    res.find((item) => item.evnetGroupId === "1")!.enabled = true;
  }

  if (state.venue) {
    res.find((item) => item.evnetGroupId === "3")!.enabled = true;
  }
  return res;
};
export const generateResultItem = (state: IGlobalState) => {
  const traditionContent = (
    <>
      , të cilët do të kenë edhe proceduren e marrjës së nusës nga Lokacioni i
      dhenderrit <b>{state.groomLocation}</b> deri tek lokacioni i nuses në{" "}
      <b>{state.brideLocation}</b>
    </>
  );
  const venueContent = (
    <>
      në <b>{state.venue}</b>
    </>
  );
  return (
    <div className="text-white">
      Oferta e gjeneruar për qiftin{" "}
      <b>
        {state.groomName} & {state.brideName}
      </b>
      , të cilët do të martohën me datën <b>{formatDate(state.eventDate)}</b>,
      {state.venue ? venueContent : null}
      {state.brideTradition ? traditionContent : null}
    </div>
  );
};
/**
 * Browser-compatible function to convert an image URL to a data URL using canvas
 * @param imageUrl - URL of the image (can be relative path like "/images/logo.png")
 * @returns Promise<string> - Data URL of the image
 */
export const imageUrlToDataUrl = async (imageUrl: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");

        if (!ctx) {
          reject(new Error("Could not get canvas context"));
          return;
        }

        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL("image/png");
        resolve(dataUrl);
      } catch (error) {
        reject(error);
      }
    };

    img.onerror = () => {
      reject(new Error(`Failed to load image: ${imageUrl}`));
    };

    img.src = imageUrl;
  });
};

/**
 * Browser-compatible function to generate email content
 * @param state - Global state object
 * @param emailBackground - Background image data URL
 * @returns Promise<string> - HTML email content
 */
/**
 * Get selected items grouped by event group
 */
const getSelectedItemsByGroup = (state: IGlobalState) => {
  const enabledEventGroups = getEnabledEventGroups(state);
  const filteredEventGroups = allEventGroups.filter(
    (group) =>
      enabledEventGroups.find((item) => item.evnetGroupId === group.id)?.enabled
  );

  const itemsByGroup: Array<{
    groupTitle: string;
    items: Array<{
      name: string;
      price: number;
      finalPrice: number;
      count: number;
    }>;
  }> = [];

  filteredEventGroups.forEach((group) => {
    const groupSelection = state.selections?.find(
      (selection) => selection.eventGroupId === group.id
    );
    if (!groupSelection || groupSelection.selectedItems.length === 0) return;

    const items = groupSelection.selectedItems
      .map((selectedItem) => {
        const item = allEventItems.find((i) => i.id === selectedItem.itemId);
        if (!item) return null;
        return {
          name: item.name,
          price: item.price,
          finalPrice: item.price * (1 - group.discountPercentage / 100),
          count: selectedItem.count,
        };
      })
      .filter(
        (
          item
        ): item is {
          name: string;
          price: number;
          finalPrice: number;
          count: number;
        } => item !== null
      );

    if (items.length > 0) {
      itemsByGroup.push({
        groupTitle: group.title,
        items,
      });
    }
  });

  return itemsByGroup;
};

export const generateEmailContentClient = async (
  state: IGlobalState,
  emailBackground: string
): Promise<string> => {
  // Get selected items grouped by event group
  const itemsByGroup = getSelectedItemsByGroup(state);

  // Generate simple email HTML without images
  const html = `
<!DOCTYPE html>
<html lang="sq">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oferta - ZOOM Production</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #000000;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%; min-height: 100vh; background-color: #000000;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!-- Content table -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: rgba(0, 0, 0, 0.8); border-radius: 20px; padding: 40px; border: 2px solid rgba(212, 170, 0, 0.5);">
          <tr>
            <td align="center" style="padding-bottom: 20px;">
              <h1 style="color: #d4aa00; font-size: 32px; margin: 0; font-weight: bold;">ZOOM Production</h1>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom: 10px; border-bottom: 1px solid rgba(212, 170, 0, 0.3);">
              <p style="color: #ffffff; font-size: 18px; margin: 0; padding-bottom: 15px;">
                <strong>${state.groomName} & ${state.brideName}</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-top: 20px; padding-bottom: 30px;">
              <p style="color: #d4aa00; font-size: 20px; margin: 0; font-weight: bold;">
                Data: ${formatDate(state.eventDate)}
              </p>
            </td>
          </tr>
          ${
            itemsByGroup.length > 0
              ? `
          <tr>
            <td style="padding-top: 20px; padding-bottom: 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
                ${itemsByGroup
                  .map(
                    (group) => `
                <tr>
                  <td style="padding-bottom: 20px;">
                    <h2 style="color: #d4aa00; font-size: 18px; margin: 0; padding-bottom: 10px; border-bottom: 1px solid rgba(212, 170, 0, 0.3); font-weight: bold;">
                      ${group.groupTitle}
                    </h2>
                  </td>
                </tr>
                ${group.items
                  .map(
                    (item) => `
                <tr>
                  <td style="padding: 12px 0; padding-left: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
                      <tr>
                        <td style="color: #ffffff; font-size: 16px; font-weight: bold;">
                          ${item.name}${item.count > 1 ? ` x${item.count}` : ""}
                        </td>
                        <td align="right" style="color: #d4aa00; font-size: 16px; font-weight: bold;">
                          ${(item.finalPrice * item.count).toFixed(2)}€
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                `
                  )
                  .join("")}
                `
                  )
                  .join("")}
                <tr>
                  <td style="padding: 12px 0; padding-left: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
                      <tr>
                        <td style="color: #ffffff; font-size: 16px; font-weight: bold;">
                          Logjistika
                        </td>
                        <td align="right" style="color: #d4aa00; font-size: 16px; font-weight: bold;">
                          ${LOGISTICS_PRICE.toFixed(2)}€
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          `
              : ""
          }
          <tr>
            <td style="padding-top: 20px; border-top: 2px solid rgba(212, 170, 0, 0.5);">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%;">
                <tr>
                  <td align="center" style="padding-top: 20px; padding-bottom: 10px;">
                    <p style="color: #ffffff; font-size: 16px; margin: 0; padding-bottom: 10px;">
                      Qmimi Final (Para Zbritjes)
                    </p>
                    <p style="color: #ffffff; font-size: 32px; font-weight: bold; margin: 0; text-decoration: line-through;">
                      ${(getTotalPrice(state) + LOGISTICS_PRICE).toFixed(2)}€
                    </p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 10px; padding-bottom: 10px;">
                    <p style="color: #d4aa00; font-size: 16px; margin: 0; padding-bottom: 10px; font-weight: bold;">
                      ${DECEMBER_DISCOUNT_PERCENTAGE}% Zbritje në Muajin Dhjetor
                    </p>
                    <p style="color: #d4aa00; font-size: 32px; font-weight: bold; margin: 0;">
                      Qmimi me zbritje: ${(
                        (getTotalPrice(state) + LOGISTICS_PRICE) *
                        (1 - DECEMBER_DISCOUNT_PERCENTAGE / 100)
                      ).toFixed(2)}€
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  return html;
};

// Browser-compatible version (uses HTML canvas)
export const generateEmailContent = async (
  state: IGlobalState
): Promise<string> => {
  // Convert logo to data URL using HTML canvas
  const logoUrl = "/images/logo.png";
  const logoDataUrl = await imageUrlToDataUrl(logoUrl);

  // Generate email HTML with inline styles (email-compatible)
  const html = `
<!DOCTYPE html>
<html lang="sq">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oferta - ZOOM Production</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #000000;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-image: url('${emailBackground}'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 100vh;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: rgba(0, 0, 0, 0.7); border-radius: 20px; padding: 40px;">
          <tr>
            <td align="center" style="padding-bottom: 30px;">
              <img src="${logoDataUrl}" alt="ZOOM Production Logo" style="max-width: 200px; height: auto; display: block;" />
            </td>
          </tr>
          <tr>
            <td style="color: #ffffff; font-size: 24px; line-height: 1.6; text-align: center; padding-bottom: 20px;">
              Oferta e gjeneruar për qiftin <strong>${state.groomName} & ${
    state.brideName
  }</strong>
            </td>
          </tr>
          <tr>
            <td style="color: #ffffff; font-size: 18px; line-height: 1.6; text-align: center; padding-bottom: 30px;">
              Të cilët do të martohën me datën <strong>${formatDate(
                state.eventDate
              )}</strong>
              ${state.venue ? ` në <strong>${state.venue}</strong>` : ""}
              ${
                state.brideTradition
                  ? `, të cilët do të kenë edhe proceduren e marrjës së nusës nga Lokacioni i dhenderrit <strong>${state.groomLocation}</strong> deri tek lokacioni i nuses në <strong>${state.brideLocation}</strong>`
                  : ""
              }
            </td>
          </tr>
          <tr>
            <td style="color: #d4aa00; font-size: 20px; text-align: center; padding-top: 20px; border-top: 2px solid rgba(212, 170, 0, 0.5);">
              Total: ${getTotalPrice(state)}€
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  return html;
};
