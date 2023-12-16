import styled from '@emotion/styled';

interface RowProps {
  gutter?: number | string;
  bordered?: boolean;
  noTopBordered?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  min-width: 0;
  box-sizing: border-box;
  position: relative;

  & > div {
    ${({ gutter, bordered, noTopBordered }) => {
      const addNoTopBordered =
        noTopBordered &&
        `
        border-top: 0px;
      `;

      const addBorder =
        bordered &&
        `
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
        padding: 10px;
        &:last-child { 
          border-right: 1px solid #ccc;
        }

        ${addNoTopBordered}
      `;

      if (!gutter) {
        return `${addBorder}`;
      }

      if (Number(gutter) > 0) {
        const calPadding = Number(gutter) / 2;

        return `
          padding-left: ${calPadding}px;
          padding-right: ${calPadding}px;

          ${addBorder}
        `;
      }

      return ``;
    }}
  }
`;

interface ColProps {
  span?: number | string;
  xl?: number | string;
  lg?: number | string;
  md?: number | string;
  sm?: number | string;
  useBlock?: boolean;
  width?: string;
}

export const Col = styled.div<ColProps>`
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0;
  position: relative;
  word-wrap: break-word;

  ${({ span, xl, lg, md, sm, useBlock, width }) => {
    const calWidth = (size: number) => {
      return 100 / (24 / size);
    };

    let colStyle = ``;

    if (xl || lg || md || sm) {
      const calWidthXL = calWidth(Number(xl) > 0 ? Number(xl) : 0);
      const calWidthLG = calWidth(Number(lg) > 0 ? Number(lg) : 0);
      const calWidthMD = calWidth(Number(md) > 0 ? Number(md) : 0);
      const calWidthSM = calWidth(Number(sm) > 0 ? Number(sm) : 0);

      colStyle = `
      
        flex: 0 0 ${calWidthSM || calWidthMD || calWidthLG || calWidthXL}%;
        max-width: ${calWidthSM || calWidthMD || calWidthLG || calWidthXL}%;
        
        // sm
        @media screen and (min-width: 576px) {
        
          flex: 0 0 ${calWidthSM || calWidthMD || calWidthLG || calWidthXL}%;
          max-width: ${calWidthSM || calWidthMD || calWidthLG || calWidthXL}%;
        }

        // md
        @media screen and (min-width: 768px) {
        
          flex: 0 0 ${calWidthMD || calWidthLG || calWidthXL || calWidthSM}%;
          max-width: ${calWidthMD || calWidthLG || calWidthXL || calWidthSM}%;
        }

        // lg
        @media screen and (min-width: 992px) {
        
          flex: 0 0 ${calWidthLG || calWidthXL || calWidthMD || calWidthSM}%;
          max-width: ${calWidthLG || calWidthXL || calWidthMD || calWidthSM}%;
        }

        // xl
        @media screen and (min-width: 1200px) {
        
          flex: 0 0 ${calWidthXL || calWidthLG || calWidthMD || calWidthSM}%;
          max-width: ${calWidthXL || calWidthLG || calWidthMD || calWidthSM}%;
        }
      `;
    }

    if (span === 'auto') {
      colStyle = `
        flex: none;
      `;
    }

    if (span === 'flex') {
      colStyle = `
        flex: 1;
      `;
    }

    if (!span) {
      colStyle = `
        flex: 1;
      `;
    }

    if (Number(span) > 0 && Number(span) <= 24) {
      const calWidthDefault = calWidth(Number(span));
      colStyle = `
        flex: 0 0 ${calWidthDefault}%;
        max-width: ${calWidthDefault}%;
      `;
    }

    if (Number(span) === 0) {
      colStyle = `display: none;`;
    }

    const blockStyle = useBlock ? `display: block;` : '';
    const widthStyle = width
      ? `width: ${width};flex: unset;max-width: unset;`
      : '';

    return `${colStyle}
    ${blockStyle}
    ${widthStyle}
    `;
  }}
`;

const responsive = {
  Row,
  Col
};

export default responsive;
