import { equipment } from "../config/prisma";

const getAllEquipments = async (inventoryId = null) => {
  try {
    const whereClause = inventoryId ? { inventoryId: parseInt(inventoryId) } : {};

    const equipments = await equipment.findMany({
      where: whereClause,
      select: {
        id: true,
        name: true,
        code: true,
        image: true,
        quantity: true,
        price: true,
        replacementFees: true,
        description: true,
        location: true,
        inventoryId: true,
        inventory: {
          select: {
            name: true, 
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });

    return equipments;
  } catch (error) {
    console.error("Error fetching equipments:", error.message);
    throw error;
  }
};

export default {
  getAllEquipments,
};